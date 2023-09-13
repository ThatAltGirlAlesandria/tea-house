import React from "react";
import Tea from "./Tea";
import PropTypes from "prop-types";

export default function TeaList(props) {
  return (
    <>
    {props.teaList.map((tea) =>
      <Tea 
      whenTeaClicked = { props.onTeaSelection }
      type = { tea.type }
      make = { tea.make }
      size = { tea.size }
      />
    )}
    </>
  );
}

TeaList.propTypes = {
  tealist: PropTypes.array,
  onTeaSelection: PropTypes.fun
}