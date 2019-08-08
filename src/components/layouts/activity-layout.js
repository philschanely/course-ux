import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../layout';

function ActivityLayout({ children, pageContext }) {
  const { title } = pageContext.frontmatter;
  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <main className="l-main l-main--lesson">
        <h2 className="l-page-name t-display-2">{title}</h2>
        <div className="l-content">
          {children}
        </div>
      </main>
    </Layout>
  )
};

export default ActivityLayout;
