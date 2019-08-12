import React from 'react';
import Helmet from 'react-helmet';
import ClassNames from 'classnames';

import Layout from '../layout';
import LessonPage from '../lesson-page';

class LessonLayout extends React.Component {

  state = {
    navItems: [],
    hasLessonPages: false,
  }

  constructor(props, state) {
    super(props, state);

    this.onClickNavItem = this.onClickNavItem.bind(this);
  }

  componentDidMount() {
    let { navItems, hasLessonPages } = this.state;
    let isFirst = true;

    this.props.children.forEach((child, index) => {
      if (child.props.mdxType === "LessonPage") {
        hasLessonPages = true;
        navItems.push({
          slug: child.props.slug,
          title: child.props.children[0].props.children,
          isActive: isFirst,
          children: child.props.children,
        });
      }
      isFirst = false;
    });

    this.setState({ navItems, hasLessonPages });
  }

  onClickNavItem(e, slug) {
    e.preventDefault();

    let { navItems } = this.state;

    navItems.forEach((item, index) => {
      item.isActive = slug === item.slug;
    });

    this.setState({ navItems });
  }

  render() {
    const { title, number } = this.props.pageContext.frontmatter;
    const { children } = this.props;
    const { navItems, hasLessonPages } = this.state;

    const numberString = number
      ? `Lesson ${number}: `
      : "";

    const content = hasLessonPages
      ? (
          <>
            {navItems.map((item, i) => (
              <LessonPage key={i} isActive={item.isActive} slug={item.slug}>
                {item.children}
              </LessonPage>
            ))}
          </>
        )
      : (
        <>
          {children}
        </>
      );

    const nav = hasLessonPages
      ? (
          <nav className="l-side-nav side-nav">
            <ul className="side-nav__group">
              {this.state.navItems.map(({ slug, title, isActive }, i) => {
                let classNames = ClassNames(
                  "side-nav__item",
                  {
                    "side-nav__item--active": isActive
                  }
                );

                return (
                  <li key={i} className={classNames}>
                    <a className="side-nav__link" href={`#${slug}`} onClick={(e) => this.onClickNavItem(e, slug)}>
                      {title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        )
      : "";

    console.log(content);

    return (
      <Layout activePath="/lessons/">
        <Helmet>
          <title>{numberString}{title}</title>
        </Helmet>
        <main className="l-main l-main--lesson">
          <h2 className="l-page-name t-display-2">{numberString}{title}</h2>
          {nav}
          <div className="l-content">
            {content}
          </div>
        </main>
      </Layout>
    );
  }
};

// { children, pageContext }

export default LessonLayout;
