import prettier from "prettier";

export default async function (value, outputPath) {
  // Check if the output is an HTML file
  if (this.page.outputPath && this.page.outputPath.endsWith(".html")) {
    // Use Prettier to format the HTML content
    return await prettier.format(content, { parser: "html" });
  }
  // Otherwise, return the content as-is
  return content;
};