import React from "react";
import { graphql } from "gatsby";

import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      id
      publishedAt
      categories {
        _id
        title
      }
      mainImage {
        ...SanityImage
        alt
      }
      title
      slug {
        current
      }
      _rawBody(resolveReferences: { maxDepth: 5 })
    }
  }
`;

const BlogPostTemplate = props => {
  const { data, errors } = props;
  const post = data && data.post;
  return (
    <>
      {errors && <SEO title="GraphQL Error" />}
      {post && <SEO title={post.title || "Untitled"} />}

      {errors && <GraphQLErrorList errors={errors} />}

      {console.log("this is post", post)}
    </>
  );
};

export default BlogPostTemplate;
