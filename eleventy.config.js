// import { EleventyHtmlBasePlugin } from '@11ty/eleventy';
import { eleventyImageTransformPlugin } from '@11ty/eleventy-img';
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import markdownIt from 'markdown-it';
import markdownItAttrs from 'markdown-it-attrs';
import pageLinks from 'eleventy-plugin-markdown-page-links';
// Transforms
import htmlPrettyTransform from './src/transforms/html-pretty.js';
import htmlMinTransform from './src/transforms/html-min.js';

export default async function (eleventyConfig) {

	const isProduction = process.env.NODE_ENV === 'production';

	// ==========================
	// markdown configuration
	// ==========================
	const mdOptions = {
		html: true,
		breaks: true,
		linkify: true,
	};
	const markdownLib = markdownIt(mdOptions)
		.use(markdownItAttrs)
		.disable('code');
	eleventyConfig.setLibrary('md', markdownLib);

	eleventyConfig.addPlugin(eleventyNavigationPlugin);

	// ==========================
	// image plugin
	// ==========================
	eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
		// which file extensions to process
		extensions: 'html',
		// optional, output image formats
		formats: ['jpg', 'webp'],
		// optional, output image widths
		widths: ['auto', 400, 800, 1024],
		// optional, attributes assigned on <img> override these values.
		defaultAttributes: {
			loading: 'lazy',
			decoding: 'async',
			class: 'image-full'
		}
	});

	eleventyConfig.addPlugin(pageLinks, {
		listType: 1,
		collapsible: true,
		sectionTitle: "Links On This Page",
		minimumLinks: 5
	});
	
	eleventyConfig.addCollection('articlesByTimestamp', collectionAPI => {
		return collectionAPI.getFilteredByTag('post').sort((a, b) => {
			// use the timestamp if we have it, otherwise date
			var aDate = a.data.timestamp ? new Date(a.data.timestamp) : new Date(a.date);
			var bDate = b.data.timestamp ? new Date(b.data.timestamp) : new Date(b.date);
			return aDate - bDate;
		});
	});
	
	// ==========================
	// utility stuff
	// ==========================
	eleventyConfig.addFilter('dateOnly', function (dateVal, locale = 'en-us') {
		// Used to display human readable date on the stats page and other pages
		var theDate = new Date(dateVal);
		const options = {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		};
		return theDate.toLocaleDateString(locale, options);
	});

	eleventyConfig.addFilter('readableTimestamp', function (dateVal, locale = 'en-us') {
		// Used by home, articles, & post pages to render timestamp as human readable
		var theDate = new Date(dateVal);
		const options = {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour12: true,
			hour: '2-digit',
			minute: '2-digit'
		};
		return theDate.toLocaleString(locale, options);
	});

	// From ray camden's blog, first paragraph as excerpt
	eleventyConfig.addShortcode('excerpt', post => extractExcerpt(post));
	async function extractExcerpt(post) {

		const noContent = '<p>No page content found.</p>'

		// No page content?
		if (!post.templateContent) return noContent;
		let pageContent = post.templateContent;

		// https://www.martingunnarsson.com/posts/eleventy-excerpts/
		// Strip HTML from the paragraph
		//  pageContent = pageContent.replace(/(<([^>]+)>)/gi, "");
		// https://cheerio.js.org/docs/intro

		// remove headings (H1, H2, etc.)
		pageContent = pageContent.replace(/<(h[2-4])>((?:(?!<h\d+\b).)+?)<\/\1>/gm, '');
		// remove picture tags
		pageContent = pageContent.replace(/<picture[^>]*>(.*?)<\/picture>/gm, '');
		// remove standalone IMG tags (just in case)
		pageContent = pageContent.replace(/<img[^>]*>/gm, '');
		// remove empty paragraph tags
		pageContent = pageContent.replace(/<p>\s<\/p>/g, '');
		pageContent = pageContent.replace(/<p><\/p>/g, '');

		if (pageContent.indexOf('</p>') > 0) {
			let start = pageContent.indexOf('<p>');
			let end = pageContent.indexOf('</p>');
			let theExcerpt = pageContent.substr(start, end + 4);
			return theExcerpt;
		}
		return noContent;
	}

	eleventyConfig.addPassthroughCopy({ 'src/favicon/*': '/' });
	[
		'src/_data/*',
		'src/assets/',
		'src/images/'
	].forEach((path) => {
		eleventyConfig.addPassthroughCopy(path);
	});

	// // Only minify HTML if we are in production
	// if (isProduction) { 
	// 	eleventyConfig.addTransform('htmlMin', htmlMinTransform);
	// } else {
	// 	eleventyConfig.addTransform('htmlPretty', htmlPrettyTransform);
	// }

	return {
		dir: {
			input: 'src',
			output: '_site',
			includes: '_includes',
			layouts: '_layouts',
			data: '_data'
		}
	}
};