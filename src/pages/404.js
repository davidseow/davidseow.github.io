import * as React from "react";

import Layout from "../components/Layout";
import Seo from "../components/Seo";

const NotFoundPage = () => {
  return (
    <Layout>
      <Seo title="404" description="Page not found" />
      <div>Page not found</div>
    </Layout>
  );
};

export default NotFoundPage;
