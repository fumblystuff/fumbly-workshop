/********************************************************************
 * Image Caption shortcut
 * by John M. Wargo
 * Created July 21, 2026
 ********************************************************************/

const PLUGIN_NAME = 'ImageCaptionShortcode';

function imageCaptionShortcode(content, name) {
    console.log(`[${PLUGIN_NAME}] "${name}"`);
    return `<div>
        <div class="pswp-gallery" id="gallery-${name}">
            ${content}
        </div>
        <script type="module">
            import PhotoSwipeLightbox from '/assets/js/photoswipe-lightbox.esm.min.js';
            import PhotoSwipe from '/assets/js/photoswipe.esm.min.js';
            const lightbox = new PhotoSwipeLightbox({
                gallery: '#gallery-${name}',
                children: 'a',
                showHideAnimationType: 'zoom',
                pswpModule: PhotoSwipe
            });
            lightbox.init();
        </script>
      </div>`
        .replace(/(\r\n|\n|\r)/gm, "");
}

export default function (eleventyConfig) {
    eleventyConfig.addLiquidShortcode('imageCaption', imageCaptionShortcode);
}
