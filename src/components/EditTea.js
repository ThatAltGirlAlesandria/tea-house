import React from "react";
import ReusableTeaForm from "./ReusableTeaForm";
import PropTypes from "prop-types";

export default function EditTealForm(props) {
  const { tea } = props;

  function handleEditTeaFormSubmission(e) {
  e.preventDefault();
  props.onEditOrder({
    type: e.target.type.value,
    make: e.target.make.value,
    description: e.target.description.value,
    size: e.target.size.value,
    id: tea.id
  });
}
  return(
    <>
      <ReusableTeaForm
        formSubmissionHandler={handleEditTeaFormSubmission}
        buttonText = "Edit Tea" />
    </>
  );
}

EditVinylForm.PropTypes = {
  vinyl: PropTypes.onject,
  onEditOrder: PropTypes.fun
}