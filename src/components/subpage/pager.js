import React from 'react';
import { Link } from 'gatsby';

import ClassNames from "classnames";

const SubpagePager = ({ hasSubpages, nextPageSlug, prevPageSlug, onClickPager }) => {
  if (hasSubpages) {
    return (
      <nav className="l-pager">
        <a className="btn btn--prev" href={`#${prevPageSlug}`} onClick={(e) => onClickPager(e, prevPageSlug)}>Previous</a>
        <a className="btn btn--next" href={`#${nextPageSlug}`} onClick={(e) => onClickPager(e, nextPageSlug)}>Next</a>
      </nav>
    );
  }

  return ("");
}

export default SubpagePager;
