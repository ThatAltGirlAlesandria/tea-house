import React from "react";
import PropTypes from "prop-types";

export default function TeaDetail (props) {
  const { tea } = props;
  return(
    <>
      <h2>Tea Details</h2>
      <h3>Tea Type: {tea.type}</h3>
      <h3>Tea Make: {tea.make}</h3>
      <h4>Description: {tea.description}</h4>
      <h4>Quantity: <em>{tea.size}</em></h4>
      <button onClick = {props.onClickingEdit}>Edit Tea</button>
    </>
  );
}

TeaDetail.propTypes = {
  tea: PropTypes.object,
}