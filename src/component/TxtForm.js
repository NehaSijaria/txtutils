import React from "react";

export default function TxtForm(props) {
  return (
    <div>
      <h3>{props.heading}</h3>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="textbox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary">Change to UpperCase</button>
    </div>
  );
}
