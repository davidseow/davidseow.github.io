import * as React from "react";

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Gallery from "../components/Gallery/Gallery";

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" description="Site description" />
      <Gallery />
    </Layout>
  );
};

export default IndexPage;
