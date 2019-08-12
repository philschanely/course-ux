import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import NavFooter from "./nav-footer";
import BrandFooter from "./brand-footer";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          title,
          pages {
            label,
            path
          }
        }
      }
    }
  `);

  return (
    <footer class="footer">
      <h2 class="footer__course-name">
        {data.site.siteMetadata.title}
      </h2>
      <NavFooter pages={data.site.siteMetadata.pages} />
      <BrandFooter />
      <p class="footer__copyright">
        Copyright ©2019 by Phil Schanely.<br class="br--only-md" />
        All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
