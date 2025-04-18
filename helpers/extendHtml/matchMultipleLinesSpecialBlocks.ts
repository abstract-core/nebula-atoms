export function matchMultipleLinesSpecialBlocks(
  html: string,
  specialBlocks: { [key: string]: (html: string, ...args: string[]) => string }
) {
  // Match patterns like <p>{#key}</p>...content...<p>{#key}</p>
  const pattern =
    /<p>\s*{#(\w+)(?:\s+([^}]+))?}\s*<\/p>([\s\S]*?)<p>\s*{#\1}\s*<\/p>/g;

  return html.replace(pattern, (match, key, args, content) => {
    const blockFunction = specialBlocks[key];
    if (!blockFunction) return match;

    if (args) {
      return blockFunction(content, ...args.trim().split(/\s+/));
    } else {
      return blockFunction(content);
    }
  });
}
