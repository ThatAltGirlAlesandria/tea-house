import React from "react";
import PropTypes from "prop-types";

export default function ReusableTeaForm(props) {
  return (
    <>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type="text"
          name="type"
          placeholder="Tea Type"
        />
        <input
          type="text"
          name="make"
          placeholder="Tea Style/ Make"
        />
        <input
          type="number"
          name="size"
          placeholder="Order Size."
        />
        <input
          type="text"
          name="description"
          placeholder="Description."
        />
        <button type="submit">{props.buttonText}</button>
      </form>
    </>
  );
}

ReusableTeaForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}