import { spfi, SPFI } from "@pnp/sp";
import "@pnp/sp/site-groups/web";
import "@pnp/sp/webs";
import "@pnp/sp/site-users/web";

import { MSGraphClientV3 } from "@microsoft/sp-http";
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { SPFx } from "@pnp/sp";
interface GraphPagedResponse<T> {
  value: T[];
  "@odata.nextLink"?: string;
}
export async function isCurrentUserMemberOfSharePointGroup(
  context: WebPartContext,
  sharePointGroupName: string
): Promise<boolean> {
  try {
    const sp: SPFI = spfi().using(SPFx(context));
    const currentUser = await sp.web.currentUser();

    const group = await sp.web.siteGroups.getByName(sharePointGroupName);
    const groupUsers = await group.users();

    // 1. Check direct membership in SharePoint group
    if (groupUsers.some(u => u.LoginName === currentUser.LoginName)) {
      return true;
    }

    // 2. Check if user is member of nested AAD/M365 groups via Graph
    const graphClient = await context.msGraphClientFactory.getClient("3");
    const me = await graphClient.api('/me').get();

    const memberships = await getAllTransitiveGroups(graphClient, me.id);

    const aadGroupsInSharePointGroup = groupUsers.filter(u =>
      u.PrincipalType === 8 // 8 = Security group/AAD group
    );

    const isInNestedGroup = memberships.some((membership: any) =>
      aadGroupsInSharePointGroup.some(spGroup =>
        spGroup.Title === membership.displayName || spGroup.LoginName.indexOf(membership.id) !== -1
      )
    );

    return isInNestedGroup;
  } catch (error) {
    console.error("Error checking group membership:", error);
    return false;
  }
}

// Helper function to handle pagination
async function getAllTransitiveGroups(graphClient: MSGraphClientV3, userId: string): Promise<any[]> {
  const allGroups: any[] = [];
  let nextUrl: string | null = `/users/${userId}/transitiveMemberOf?$select=id,displayName&$top=100`;

  while (nextUrl) {
    const response: GraphPagedResponse<any> = await graphClient.api(nextUrl).get();
    allGroups.push(...response.value);

    nextUrl = response["@odata.nextLink"]
      ? response["@odata.nextLink"].replace("https://graph.microsoft.com/v1.0", "")
      : null;
  }

  return allGroups;
}

