'use strict'

// https://developers.google.com/identity/sign-in/web/devconsole-project

import Fetch from "@11ty/eleventy-fetch";

const feedURL = 'https://us-east1-jmw-static-site.cloudfunctions.net/getTopPosts';
const postFix = ': Fumbly Workshop';
const propertyId = '531299055';
const postCount = 10;

export default async function () {
  console.log(`[topPosts] Fetching top ${postCount} posts for property ID ${propertyId}`);
  let data = await Fetch(
    `${feedURL}?propertyId=${propertyId}&count=${postCount}`,
    { duration: "1d", type: "json", fetchOptions: { mode: 'cors' } }
  );
  if (data) {
    data.articles.forEach(article => {
      article.title = article.title.replace(postFix, '');
    });
    return data.articles;
  } else {
    console.error(`[topPosts] Error fetching top posts`);
    return [];
  }
}
