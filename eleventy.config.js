// import { EleventyHtmlBasePlugin } from '@11ty/eleventy';
import { eleventyImageTransformPlugin } from '@11ty/eleventy-img';
import markdownIt from 'markdown-it';
import markdownItAttrs from 'markdown-it-attrs';

// Transforms
import htmlPrettyTransform from './src/transforms/html-pretty.js';
import htmlMinTransform from './src/transforms/html-min.js';

export default async function (eleventyConfig) {

	const isProduction = process.env.NODE_ENV === 'production';

	// eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

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