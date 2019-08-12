import React from "react";
import PropTypes from "prop-types";
import ClassNames from "classnames";

const LessonPage = ({ slug, children, isActive }) => {
  let classNames = ClassNames(
    "lesson-page",
    {
      "lesson-page--active": isActive,
    }
  );

  return (
    <div className={classNames} id={slug}>
      {children}
    </div>
  );
};

LessonPage.propTypes = {
  isActive: PropTypes.bool,
  slug: PropTypes.string,
  children: PropTypes.node.isRequired,
};

LessonPage.defaultProps = {
  isActive: false,
};

export default LessonPage;
