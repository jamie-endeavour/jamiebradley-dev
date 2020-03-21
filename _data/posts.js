require("dotenv").config();

const BlocksToMarkdown = require("@sanity/block-content-to-markdown");
const client = require("../utils/sanity.js");
const serializers = require("../utils/serializers");
const hasToken = !!client.config().token;

// Node fetch
const fetch = require("node-fetch");

function generatePost(post) {
  return {
    ...post,
    body: BlocksToMarkdown(post.bodyRaw, { serializers, ...client.config() }),
    excerpt: BlocksToMarkdown(post.excerptRaw, { serializers, ...client.config() })
  };
}

function checkForToken() {
  if (!hasToken) {
    throw new Error(`
      You did not provide a token. Make sure you have created a
      token in your sanity account.
    `);
  }

  return true;
}

async function getPosts() {
  const url = `${client.clientConfig.url}/graphql/${client.clientConfig.dataset}/default`;
  const query = `
    query {
      allPost(sort: [{ publishedAt: ASC }], where: { _: { is_draft: false }}) {
        title
        slug {
          current
        }
        publishedAt
        excerptRaw
        bodyRaw
      }
    }
  `;

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${client.clientConfig.token}`
    },
    body: JSON.stringify({ query })
  };

  // Only proceed if the token check is successful
  if (checkForToken()) {
    try {
      const res = await fetch(url, options);

      if (res.status === 200) {
        const json = await res.json();
        return json.data.allPost.map(generatePost);
      }
    } catch (err) {
      throw new Error(`
        There was a problem retrieving posts.
        ${err.message}
      `);
    }
  }
}

module.exports = getPosts;
