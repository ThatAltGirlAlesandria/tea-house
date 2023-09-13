import React from "react";
import PropTypes from "prop-types";

export default function Tea(props) {
  return (
    <>
      <h3>{props.type}</h3>
      <h4><em>{props.make}</em></h4>
      <h4>{props.size}</h4>
    </>
  );
}

Tea.propTypes = {
  type: PropTypes.string,
  make: PropTypes.string,
  size: PropTypes.int
};