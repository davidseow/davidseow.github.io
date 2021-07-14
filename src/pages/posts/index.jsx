import * as React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../../components/Layout";
import Seo from "../../components/Seo";

import "./index.css";

const IndexPage = ({ data }) => {
  const posts = data.allMdx.nodes;

  return (
    <Layout {...posts}>
      <Seo title="Post" description="Post listing" />
      <menu className="breadcrumb">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
      </menu>
      {posts.map((post) => {
        return (
          <>
            <div key={post.slug} className="posts">
              <Link to={post.slug}>
                <h2>{post.frontmatter.title}</h2>
              </Link>
            </div>
          </>
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
