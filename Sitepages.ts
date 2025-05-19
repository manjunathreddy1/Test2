import { spfi, SPFI } from "@pnp/sp";
import { SPFx } from "@pnp/sp";
import "@pnp/sp/items";
import "@pnp/sp/lists/web";
import { WebPartContext } from "@microsoft/sp-webpart-base";

export async function getSitePagesOrderedByCreatedDesc(context: WebPartContext) {
  const sp: SPFI = spfi().using(SPFx(context));

  const pages = await sp.web.lists.getByTitle("Site Pages").items
    .orderBy("Created", false) // false for descending
    .top(20) // optional: limit results
    .select("Id", "Title", "FileRef", "Created")();

  return pages;
}



/*await updateSitePage(context, 12, {
  Title: "Updated Page Title",
  CustomFieldInternalName: "New Value"
});
*/