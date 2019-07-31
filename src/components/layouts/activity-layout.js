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
      <article>
        <header>
          <h2>Activity: {title}</h2>
        </header>
        {children}
      </article>
    </Layout>
  )
};

export default ActivityLayout;
