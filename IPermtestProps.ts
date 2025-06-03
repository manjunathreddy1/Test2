 const currentUser = await sp.web.currentUser();

    // Update the item
    await sp.web.lists.getByTitle(listTitle).items.getById(itemId).update({
      "Approval Status": "Approved",
      "Approved ById": currentUser.Id, // use internal name + 'Id' for people field
      "Approved Date": new Date().toISOString(),
    });
