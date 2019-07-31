import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout";
import SEO from "../components/seo";

import Overview from "../snippets/overview";

const IndexPage = ({ data }) => {
  const projects = data.projects.edges;
  const lessons = data.lessons.edges;
  return (
    <Layout>
      <SEO title="Home" />
      <Overview />
      <p>Published: {process.env.GATSBY_REPOSITORY_URL}</p>
      <Link to="/page-2/">Go to page 2</Link>
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
      <div className="group group--projects">
        <h3>Projects</h3>
        <ul>
          {projects.map(({ node }) => {
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
    projects: allMdx(filter: {frontmatter: {type: {eq: "projects"}}}) {
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
