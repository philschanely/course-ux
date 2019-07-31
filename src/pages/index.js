import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout";
import SEO from "../components/seo";

import Overview from "../snippets/overview";

const IndexPage = ({ data }) => {
  const activities = data.activities.edges;
  const lessons = data.lessons.edges;
  return (
    <Layout>
      <SEO title="Home" />
      <Overview />
      <div className="group group--lessons">
        <h3>Lessons <em>{process.env.GATSBY_TEST_ENV}</em></h3>
        <ul>
          {lessons.map(({ node }) => {
            const { title, type } = node.frontmatter
            return (
              <li key={node.id}>
                <header>
                  <h3>{title}</h3>
                  <div>Posted in {type}</div>
                </header>
                <p>{node.excerpt}</p>
                <Link to={node.fields.slug}>View Article</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="group group--activities">
        <h3>Activities</h3>
        <ul>
          {activities.map(({ node }) => {
            const { title, type } = node.frontmatter
            return (
              <li key={node.id}>
                <header>
                  <h3>{title}</h3>
                  <div>Posted in {type}</div>
                </header>
                <p>{node.excerpt}</p>
                <Link to={node.fields.slug}>View Article</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
}

export default IndexPage;

export const pageQuery = graphql`
  query siteIndex {
    lessons: allMdx(filter: {frontmatter: {type: {eq: "lessons"}}}) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            type
          }
          fields {
            slug
          }
        }
      }
    }
    activities: allMdx(filter: {frontmatter: {type: {eq: "activities"}}}) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            type
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
