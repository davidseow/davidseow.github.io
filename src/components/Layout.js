import React from "react";
import { Link } from "gatsby";

import "./Layout.css";

const Layout = ({ children }) => (
  <div>
    <header>
      <nav>
        <Link
          activeClassName="active"
          to="https://www.instagram.com/davidseow/"
        >
          Instagram
        </Link>
        <Link activeClassName="active" to="https://github.com/davidseow">
          Github
        </Link>
        {/* <Link activeClassName="active" to="/">
          Home
        </Link> */}
        {/* <Link activeClassName="active" to="/articles">
          Articles
        </Link> */}
      </nav>
    </header>
    <main>{children}</main>
    <footer>
      <p>&copy; David Seow 2021</p>
    </footer>
  </div>
);

export default Layout;
