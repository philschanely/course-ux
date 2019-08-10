import React from "react";
import Helmet from 'react-helmet';
import PropTypes from "prop-types";

import Header from "./header";

const Layout = ({ activePath, children }) => {
  return (
    <>
      <Helmet>
        <link type="text/css" rel="stylesheet" href={`${process.env.GATSBY_TOOLKIT_URL}/assets/toolkit/styles/toolkit.css`} />
      </Helmet>
      <Header activePath={activePath} />
      {children}
      <footer>
        <p>Details coming soon.</p>
      </footer>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  activePath: PropTypes.string,
};

export default Layout;
