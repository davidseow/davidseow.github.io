import * as React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../../components/Layout";
import SEO from "../../components/SEO";

const IndexPage = ({ data }) => {
  const posts = data.allMdx.nodes;

  return (
    <Layout {...posts}>
      <SEO title="Home" description="Site description" />
      {posts.map((post) => {
        return (
          <div key={post.slug} className="post">
            <Link to={post.slug}>
              <h2>{post.frontmatter.title}</h2>
            </Link>
          </div>
        );
      })}
    </Layout>
  );
};

export const pageQuery = graphql`
  {
    allMdx(sort: { fields: [frontmatter___title], order: ASC }) {
      nodes {
        frontmatter {
          title
        }
        slug
      }
    }
  }
`;

export default IndexPage;
