export function slugify(bookTitle) {
  return bookTitle.replace(/[+%!]/g, "").replace(/[ ]/g, "-").toLowerCase();
}
