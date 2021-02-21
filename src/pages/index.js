import * as React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Gallery from "../components/Gallery/Gallery";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" description="Site description" />
      <Gallery />
    </Layout>
  );
};

export default IndexPage;
