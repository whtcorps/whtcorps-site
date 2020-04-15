import React from "react";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { Code } from "../components/code";
import { Link } from "../components/link";

const command =
  "git clone https://www.github.com/YosiSF/EinsteinDB";

const App = () => (
  <Layout>
    <SEO />
    <Code>{command}</Code>
    <Link to="/about">About</Link>
  </Layout>
);

export default App;
