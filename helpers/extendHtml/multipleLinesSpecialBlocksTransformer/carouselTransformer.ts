export function carouselTransformer(html: string) {
  console.log(html);
  // Remove paragraph tags around image tags
  const imagePattern = /<p>\s*(<img[^>]*\/>)\s*<\/p>/g;
  html = html.replace(imagePattern, (match, imgTag) => imgTag);

  return `<div class="carousel">
  <button>&lt</button>${html}<button>&gt</button>  
</div>`;
}
