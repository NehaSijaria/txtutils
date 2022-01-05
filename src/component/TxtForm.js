import { React, useState } from "react";

export default function TxtForm(props) {
  const [txt, setTxt] = useState("Type your text");

  const txtToUpCase = () => {
    let newTxt = txt.toUpperCase();
    setTxt(newTxt);
  };
  const txtToLowerCase = () => {
    let newTxt = txt.toLowerCase();
    setTxt(newTxt);
  };
  const clearTxt = () => {
    let newTxt = " ";
    setTxt(newTxt);
  };
  const revTxt = () => {
    // let arr = [];
    // let spTxt = txt.split(" ");
    // for (let i = spTxt.length - 1; i >= 0; i--) {
    //   arr.push(spTxt[i]);
    // }
    // let rev = arr.join(" ");
    // setTxt(rev);
    let newText=txt.split(" ").reverse( ).join(" ");
    setTxt(newText);
  };

  const handleChange = (e) => setTxt(e.target.value);

  return (
    <>
      <div className="container my-3">
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="textbox"
            rows="8"
            value={txt}
            onChange={handleChange}
          ></textarea>
        </div>
        <button className="btn btn-info mx-1" onClick={txtToUpCase}>
          Change to UpperCase
        </button>
        <button className="btn btn-danger mx-1" onClick={clearTxt}>
          Clear Text
        </button>
        <button className="btn btn-info mx-1" onClick={revTxt}>
          Reverse Text
        </button>
        <button className="btn btn-success mx-1" onClick={txtToLowerCase}>
          Change to LowerCase
        </button>
      </div>
      <div className="container my-3">
        <h3>Your Text Summary</h3>
        <p>word counter: {txt.split(" ").length} </p>
        <p> charcter counter: {txt.length} </p>
        <h4>Preview Text</h4>
        <p>{txt}</p>
        <h4>Approx time taken</h4>
        <p>{0.008 * txt.split(" ").length} min</p>
      </div>
    </>
  );
}
