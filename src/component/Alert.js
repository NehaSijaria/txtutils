import React from "react";

export default function Alert(props) {
  const capitalize = (word) => {
    const toLower = word.toLowerCase();
    return toLower.charAt(0).toUpperCase() + toLower.slice(1)
  }
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        {props.alert.msg} : {capitalize(props.alert.type)}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    )
  );
}
