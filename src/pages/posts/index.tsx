import * as React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../../components/Layout/Layout";
// import Seo from "../../components/Seo";

const PostsPage = ({ data }) => {
  const posts = data.allMdx.nodes;

  return (
    <Layout {...posts}>
      {/* <Seo title="Post" description="Post listing" /> */}
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

export default PostsPage;
