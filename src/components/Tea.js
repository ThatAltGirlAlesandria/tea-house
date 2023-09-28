import React from "react";
import PropTypes from "prop-types";

export default function Tea(props) {
  return (
    <div className = "tea-details" onClick = {() => props.whenTeaClicked(props.id)}>
      <h3>{props.type}</h3>
      <h4><em>{props.make}</em></h4>
      <h4>{props.size}</h4>
      <h4>{props.available}</h4>
      <button onClick = {() => props.whenSellClicked(props.id)}>Sell</button>
    </div>
  );
}

Tea.propTypes = {
  type: PropTypes.string,
  make: PropTypes.string,
  description: PropTypes.string,
  size: PropTypes.number,
  price: PropTypes.number,
  available: PropTypes.number,
  id: PropTypes.string,
  whenTeaClicked: PropTypes.func,
  whenEditClicked: PropTypes.func,
  whenDeleteClicked: PropTypes.func,


};