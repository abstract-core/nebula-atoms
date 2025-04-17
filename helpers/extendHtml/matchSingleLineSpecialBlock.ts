export function matchSingleLineSpecialBlock(
  html: string,
  specialBlocks: { [key: string]: (...args: string[]) => string }
) {
  // Match patterns like {#name} or {#name arg1 arg2 ...}
  const pattern = /<p>\s*{#(\w+)(?:\s+([^}]+))?}\s*<\/p>/g;

  return html.replace(pattern, (match, name, args) => {
    const blockFunction = specialBlocks[name];
    if (!blockFunction) return match;

    if (args) {
      // Split args by whitespace and pass them to the function
      return blockFunction(...args.trim().split(/\s+/));
    } else {
      // Call function without arguments
      return blockFunction();
    }
  });
}
