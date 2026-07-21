/********************************************************************
 * Image Caption shortcut
 * by John M. Wargo
 * Created July 21, 2026
 * 
 * This should automatically caption all of the image files on a 
 * page. Using sequential numbers, of course.
 ********************************************************************/

const PLUGIN_NAME = 'ImageCaptionShortcode';

function captionedImageShortcode(imagePath, captionText, captionClass) {
    console.log(`[${PLUGIN_NAME}] "${imagePath}"`);
    return `<p class="${captionClass}"><strong>Figure #:</strong> ${captionText}</p>`;
}

export default function (eleventyConfig) {
    eleventyConfig.addLiquidShortcode('captionedImage', captionedImageShortcode);
}
