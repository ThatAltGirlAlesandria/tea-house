import React from "react";
import PropTypes from "prop-types";
import ReusableTeaForm from "./ReusableTeaForm";
import { v4 } from "uuid";

export default function NewTeaForm(props) {
  function handleNewTeaFormSubmission(e){
    e.preventDefault();
    const price = parseFloat(e.target.price.value);

    props.onNewTeaOrder({
      type: e.target.type.value,
      make: e.target.make.value,
      description: e.target.description.value,
      price: e.target.price.value,
      //size: e.target.size.value,
      available: e.target.available.value,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableTeaForm
        formSubmissionHandler={handleNewTeaFormSubmission}
        buttonText="Submit"/>
    </React.Fragment>
  );
}

NewTeaForm.propTypes = {
  onNewTeaOrder: PropTypes.func
}