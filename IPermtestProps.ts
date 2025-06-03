  const item = await sp.web.lists.getByTitle("Site Pages").items.getById(pageItemId).select("Title", "FileRef")();

    const pageTitle = item.Title;
    const serverRelativeUrl = item.FileRef;
    const absoluteUrl = `${context.pageContext.site.absoluteUrl}${serverRelativeUrl.replace(context.pageContext.web.serverRelativeUrl, '')}`;

    console.log("Page Title:", pageTitle);
    console.log("Full URL:", absoluteUrl);
