import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

const Lockup = ({ id, slug, title, type, excerpt }) => {
  return (
    <li className="lockup">
      <header>
        <h3 className="lockup__title">
          <Link className="lockup__title-link" to={slug}>
            {title}
          </Link>
        </h3>
        <p className="lockup__categories">
          <i className="fal fa-book icon icon--display-5" />
          {type}
        </p>
      </header>
      <p className="lockup__lead">
        {excerpt}
      </p>
      <div className="lockup__banner">
        <img src="https://source.unsplash.com/random/800x600" alt="" />
      </div>
      <Link className="lockup__link btn" to={slug}>
        Get started
      </Link>
    </li>
  );
}

Lockup.propTypes = {
  id: PropTypes.string,
  slug: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  excerpt: PropTypes.string,
};

export default Lockup;
