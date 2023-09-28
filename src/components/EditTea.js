import React from "react";
import ReusableTeaForm from "./ReusableTeaForm";
import PropTypes from "prop-types";

function EditTeaForm(props) {
  const { tea } = props;

  function handleEditTeaFormSubmission(e) {
    e.preventDefault();
    props.onEditOrder({
      type: e.target.type.value,
      make: e.target.make.value,
      description: e.target.description.value,
      price: e.target.price.value,
      size: e.target.size.value,
      available: e.target.available.value,
      id: tea.id
    });
  }

  return(
    <React.Fragment>
      <ReusableTeaForm
        formSubmissionHandler={handleEditTeaFormSubmission}
        buttonText = "Edit Tea" />
    </React.Fragment>

  );
}

EditTeaForm.propTypes = {
  tea: PropTypes.object,
  onEditOrder: PropTypes.func
}

export default EditTeaForm;