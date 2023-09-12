export function textToSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .split(" ")
    .join("-")
    .replace(/[^a-z-]/g, "")
    .replace(/^\-?|\-?$/g, "");
}
