import React from "react";
import PropTypes from "prop-types";

const LockupGroup = ({ groupHeading, children }) => (
  <div class="lockup-group">
		<h2 class="lockup-group__heading">{groupHeading}</h2>
		<ul class="lockups">
      {children}
    </ul>
  </div>
);

LockupGroup.propTypes = {
  children: PropTypes.node.isRequired,
  groupHeading: PropTypes.string,
};

export default LockupGroup;
