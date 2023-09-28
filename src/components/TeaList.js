import React from "react";
import Tea from "./Tea";
import PropTypes from "prop-types";

export default function TeaList(props) {
  const availableTea = props.teaList;
  let emptyList = null;
  if (availableTea.length === 0) {
    emptyList = 
      <h2>Currently, our tea is sold out. We're working hard to restock items for you.</h2>
  }
  
  return (
    <React.Fragment>
    <h3>Tea Inventory</h3>
    
    {props.teaList.map((tea) =>
      <Tea 
      whenSellClicked = {props.onSellTeaClicked}
      whenTeaClicked = { props.onTeaSelection }
      type = { tea.type }
      make = { tea.make }
      description = { tea.description }
      price = { tea.price }
      size = { tea.size }
      available = { tea.available }
      id = { tea.id }
      key = { tea.id }
      />
    )}
    </React.Fragment>
  );
}

TeaList.propTypes = {
  teaList: PropTypes.array,
  onTeaSelection: PropTypes.func
}