onst queryParams = new URLSearchParams(window.location.search);
const page = queryParams.get("page");
console.log("Page param:", page);
