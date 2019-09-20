import React from "react";
import { graphql } from "gatsby";
import { mapEdgesToNodes } from "../lib/helpers";

import GraphQLErrorList from "../components/graphql-error-list";

export const query = graphql`
  query BlogPageQuery {
    posts: allSanityPost(sort: { fields: [publishedAt], order: DESC }) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            ...SanityImage
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`;

const BlogPage = props => {
  const { data, errors } = props;

  if (errors) {
    return <GraphQLErrorList errors={errors} />;
  }

  const postNodes = data && data.posts && mapEdgesToNodes(data.posts);

  return (
    <>
      <SEO title="Blog" />
      <h1>Blog</h1>
      {postNodes && postNodes.length > 0 && <BlogPostPreviewGrid nodes={postNodes} />}
    </>
  );
};

export default BlogPage;
