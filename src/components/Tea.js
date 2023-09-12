import React from "react";
import PropTypes from "prop-types";

export default function Tea() {
  return (
    <>
      <h3>{props.type}</h3>
      <h4><em>{props.make}</em></h4>
      <h4></h4>
      <h4>{props.size}</h4>
    </>
  );
}