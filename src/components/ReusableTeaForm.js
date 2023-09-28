import React from "react";
import PropTypes from "prop-types";

export default function ReusableTeaForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type="string"
          name="type"
          placeholder="Tea Type"
        />
        <input
          type="string"
          name="description"
          placeholder="Description"
        />
        <input
          type="string"
          name="make"
          placeholder="Tea Style/ Make"
        />
        <input
          type="number"
          name="price"
          step="0.01"
          min="0.00"
          placeholder="$ per ounce"
        />
        <input
          type="number"
          name="available"
          min="0"
          max="200"
          placeholder="Ounces Available"
        />
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableTeaForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}
