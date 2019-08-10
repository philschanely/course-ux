import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../layout';

function LessonLayout({ children, pageContext }) {
  const { title } = pageContext.frontmatter;
  return (
    <Layout activePath="/lessons/">
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

export default LessonLayout;
