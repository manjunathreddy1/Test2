interface PageItem {
  id: string;
  title: string;
  fileName: string;
  created: string;
  modified: string;
  createdBy: string;
  authorField: {
    Id: number;
    Title: string;
    Email?: string;
    [key: string]: any;
  };
}




const mapped: PageItem[] = result.map((item: any) => ({
  id: item.Id.toString(),
  title: item.Title,
  fileName: item.FileLeafRef,
  created: new Date(item.Created).toLocaleString(),
  modified: new Date(item.Modified).toLocaleString(),
  createdBy: item.Author?.Title || "Unknown",
  authorField: {
    Id: item.Author?.Id,
    Title: item.Author?.Title,
    Email: item.Author?.Email,
  },
}));


.select("Id", "Title", "FileLeafRef", "Created", "Modified", "Author/Id", "Author/Title", "Author/Email")
.expand("Author")
