import * as React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="404" description="Page not found" />
      <div>Page not found</div>
    </Layout>
  );
};

export default NotFoundPage;
