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
      <main className="l-main home">
        <div className="home__intro">
          <h2 class="home__intro-heading t-display-2 display--centered">Welcome!</h2>
          <Overview />
        </div>
        <div className="home__lockups">
          <div class="lockup-group">
    				<h2 class="lockup-group__heading">Lessons</h2>
    				<ul class="lockups">
              {lessons.map(({ node }) => {
                const { title, type } = node.frontmatter
                return (
                  <li key={node.id} className="lockup">
                    <header>
                      <h3 className="lockup__title">
                        <Link className="lockup__title-link" to={node.fields.slug}>{title}</Link>
                      </h3>
                      <p className="lockup__categories">
                        <i className="fal fa-book icon icon--display-5" />
                        {type}
                      </p>
                    </header>
                    <p className="lockup__lead">{node.excerpt}</p>
                    <div className="lockup__banner">
        							<img src="https://source.unsplash.com/random/800x600" />
        						</div>
                    <Link className="lockup__link btn" to={node.fields.slug}>Get started</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div class="lockup-group">
    				<h2 class="lockup-group__heading">Activities</h2>
            <ul class="lockups">
              {activities.map(({ node }) => {
                const { title, type } = node.frontmatter
                return (
                  <li key={node.id} className="lockup">
                    <h3 className="lockup__title">
                      <Link className="lockup__title-link" to={node.fields.slug}>{title}</Link>
                    </h3>
                    <p className="lockup__categories">
                      <i className="fal fa-chess icon icon--display-5" />
                      {type}
                    </p>
                    <p className="lockup__lead">{node.excerpt}</p>
                    <div className="lockup__banner">
        							<img src="https://source.unsplash.com/random/800x600" />
        						</div>
                    <Link className="lockup__link btn" to={node.fields.slug}>Get started</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </main>
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
