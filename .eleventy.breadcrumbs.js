/********************************************************************
 * Breadcrumbs Shortcode
 ********************************************************************/
function toProperCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default function (eleventyConfig) {
  eleventyConfig.addShortcode('breadcrumbs', function () {
    const currentPageUrl = String(this.page.url) || '';
    const segments = currentPageUrl.split('/').filter(Boolean);
    let breadcrumbHtml = '';
    if (segments.length > 0) {
      breadcrumbHtml += '<div class="breadcrumb" aria-label="breadcrumb"><a href="/">Home</a> | ';
      let path = '';
      segments.forEach((segment, index) => {
        path += `/${segment}/`;
        if (index === segments.length - 1) {
          breadcrumbHtml += `${toProperCase(segment)}`;
        } else {
          breadcrumbHtml += `<a href="${path}">${toProperCase(segment)}</a> | `;
        }
      });
      breadcrumbHtml += '</div>';
    }
    return breadcrumbHtml;
  });
}
