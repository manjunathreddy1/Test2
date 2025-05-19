import { spfi, SPFI } from "@pnp/sp";
import { SPFx } from "@pnp/sp";
import "@pnp/sp/items";
import "@pnp/sp/lists/web";
import { WebPartContext } from "@microsoft/sp-webpart-base";

export async function updateSitePage(
  context: WebPartContext,
  pageId: number,
  updatedFields: { [key: string]: any }
) {
  const sp: SPFI = spfi().using(SPFx(context));

  try {
    await sp.web.lists.getByTitle("Site Pages").items.getById(pageId).update(updatedFields);
    console.log("Page updated successfully.");
  } catch (error) {
    console.error("Error updating page:", error);
  }
}
