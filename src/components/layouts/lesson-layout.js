import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../layout';

function LessonLayout({ children, pageContext }) {
  const { title, number } = pageContext.frontmatter;
  let numberString = number
    ? `Lesson ${number}: `
    : "";
  return (
    <Layout activePath="/lessons/">
      <Helmet>
        <title>{numberString}{title}</title>
      </Helmet>
      <main className="l-main l-main--lesson">
        <h2 className="l-page-name t-display-2">{numberString}{title}</h2>
        <div className="l-content">
          {children}
        </div>
      </main>
    </Layout>
  )
};

export default LessonLayout;
