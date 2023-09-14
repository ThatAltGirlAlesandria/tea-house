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
    <>
    {props.teaList.map((tea) =>
      <Tea 
      whenSellClicked = {props.onSellTeaClicked}
      whenTeaClicked = { props.onTeaSelection }
      type = { tea.type }
      make = { tea.make }
      size = { tea.size }
      id = { tea.id }
      />
    )}
    {emptyList}
    </>
  );
}

TeaList.propTypes = {
  teaList: PropTypes.array,
  onTeaSelection: PropTypes.func,
  onSellTeaClicked: PropTypes.func
}