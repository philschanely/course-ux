import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout";
import LockupGroup from "../components/lockup-group";
import Lockup from "../components/lockup";
import SEO from "../components/seo";

import Overview from "../snippets/overview";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <main className="l-main home">
        <div className="home__intro">
          <h2 class="home__intro-heading t-display-2 display--centered">Welcome!</h2>
          <Overview />
        </div>
        <div className="home__lockups">
          <LockupGroup groupHeading="Lessons">
            {data.lessons.edges.map(({ node }) => (
              <Lockup
                key={node.id}
                id={node.id}
                title={node.frontmatter.title}
                type={node.frontmatter.type}
                slug={node.fields.slug}
                excerpt={node.excerpt}
              />
            ))}
          </LockupGroup>
          <LockupGroup groupHeading="Activities">
            {data.activities.edges.map(({ node }) => (
              <Lockup
                key={node.id}
                id={node.id}
                title={node.frontmatter.title}
                type={node.frontmatter.type}
                slug={node.fields.slug}
                excerpt={node.excerpt}
              />
            ))}
          </LockupGroup>
        </div>
      </main>
    </Layout>
  );
}

export default IndexPage;

export const pageQuery = graphql`
  query siteIndex {
    lessons: allMdx(filter: {frontmatter: {type: {eq: "lessons"}}}, sort: {fields: frontmatter___title}) {
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
    activities: allMdx(filter: {frontmatter: {type: {eq: "activities"}}}, sort: {fields: frontmatter___title}) {
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