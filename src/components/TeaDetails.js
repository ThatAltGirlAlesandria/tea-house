import React from "react";
import PropTypes from "prop-types";

export default function TeaDetail (props) {
  const { tea, onClickingDelete } = props;
  return(
    <React.Fragment>
      <h2>Tea Details</h2>

      <h3>Tea Type: {tea.type}</h3>
      <h3>Tea Make: {tea.make}</h3>
      <h4>Description: {tea.description}</h4>
      <h4>Availability: <em>{tea.available}</em></h4>
      <button onClick = {props.onClickingEdit}>Edit Tea</button>
      <button onClick = { props.onTeaSale }>Sell</button>
      <button onClick = {() => onClickingDelete(tea.id)}>Delete Tea</button>
    </React.Fragment>
  );
}

TeaDetail.propTypes = {
  tea: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onTeaSale: PropTypes.func
}