import React from "react";
import PropTypes from "prop-types";
import ReusableTeaForm from "./ReusableTeaForm";
import { v4 } from "uuid";

export default function NewTeaForm(props) {
  function handleNewTeaFormSubmission(e){
    props.onNewTeaOrder({
      type: e.target.type.value,
      make: e.target.make.value,
      size: e.target.size.value,
      id: v4()
    });
  }

  return (
    <>
      <ReusableTeaForm
        formSubmissionHandler={handleNewTeaFormSubmission}
        buttonText="Submit"/>
    </>
  );
}

NewTeaForm.propTypes = {
  onNewTeaOrder: PropTypes.func
}