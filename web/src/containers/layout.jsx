import { graphql, StaticQuery } from "gatsby";
import React from "react";
import Layout from "../components/layout";

const query = graphql`
  query SiteTitleQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
    }
  }
`;

function LayoutContainer(props) {
  return (
    <div>
      <p>This is the layout container</p>
    </div>
  );
}

export default LayoutContainer;
