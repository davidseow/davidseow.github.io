import React from "react";
import { Link } from "gatsby";

import "./Layout.css";
import InstagramIcon from "../../static/icons/instagram.svg";
import GithubIcon from "../../static/icons/github.svg";

const Layout = ({ children }) => (
  <>
    <div className="container">
      <header>
        <nav>
          <div className="menu">
            <Link activeClassName="active" to="/">
              Home
            </Link>
            <Link activeClassName="active" to="/posts">
              Posts
            </Link>
            <div className="social">
              <a
                href="https://www.instagram.com/davidseow/"
                className="instagram"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram - David Seow"
              >
                <InstagramIcon />
              </a>
              <a
                className="github"
                href="https://github.com/davidseow"
                target="_blank"
                rel="noreferrer"
                aria-label="Github - David Seow"
              >
                <GithubIcon />
              </a>
            </div>
          </div>
        </nav>
      </header>
      <main>{children}</main>
    </div>

    <footer>
      <p>&copy; David Seow 2021</p>
    </footer>
  </>
);

export default Layout;
