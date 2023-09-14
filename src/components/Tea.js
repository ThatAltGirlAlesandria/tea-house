import React from "react";
import PropTypes from "prop-types";

export default function Tea(props) {
  return (
    <>
      <h3>{props.type}</h3>
      <h4><em>{props.make}</em></h4>
      <h4>{props.size}</h4>
      <button onClick = {() => props.whenSellClicked(props.id)}>Sell</button>
    </>
  );
}

Tea.propTypes = {
  type: PropTypes.string,
  make: PropTypes.string,
  description: PropTypes.string,
  size: PropTypes.int,
  id: PropTypes.string,
  whenTeaClicked: PropTypes.func,
  whenSellClicked: PropTypes.func
};