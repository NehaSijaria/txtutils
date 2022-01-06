import { React, useState } from "react";

export default function TxtForm(props) {
  const [txt, setTxt] = useState("Type your text");

  const txtToUpCase = () => {
    let newTxt = txt.toUpperCase();
    setTxt(newTxt);
    props.showAlert('Capitalized', 'success')
  };

  const txtToLowerCase = () => {
    let newTxt = txt.toLowerCase();
    setTxt(newTxt);
    props.showAlert('Changed to Lower Case', 'success')
  };

  const clearTxt = () => {
    let newTxt = " ";
    setTxt(newTxt);
    props.showAlert('Text Cleared', 'success')
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
    props.showAlert('Text Reveresed', 'success')
  };
  
   
  const handleChange = (e) => setTxt(e.target.value);

  return (
    <>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="textbox"
            rows="8"
            value={txt}
            placeholder="Type something"
            onChange={handleChange}
            style={{
              backgroundColor: props.mode==='dark'?'grey':'white', 
              color: props.mode==='dark'?
              'white':'#042743', }}
          ></textarea>
        </div>
        <button className="btn btn-info mx-1" onClick={txtToUpCase}>
          Change to UpperCase
        </button>
        <button className="btn btn-info mx-1" onClick={clearTxt}>
          Clear Text
        </button>
        <button className="btn btn-info mx-1" onClick={revTxt}>
          Reverse Text
        </button>
        <button className="btn btn-info mx-1" onClick={txtToLowerCase}>
          Change to LowerCase
        </button>
        <button className="btn btn-info mx-1">
          Remove Duplicate words
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h3 class="badge bg-secondary p-3 fs-3">Your Text Summary</h3>
        <p>word counter: {txt.split(" ").length} </p>
        <p> charcter counter: {txt.length} </p>
        <h4 class="badge bg-secondary p-3 fs-3 fst-normal">Preview Text</h4>
        <p
           style = {{
            color:
            txt.length===0
            ? 'grey'
            : `${props.mode === "dark" ? "white" : "black"}`,
          }}  
            >
              {txt.length>0?txt:"Enter in txtbox to preview:"}
          
          </p>
        <h4>Approx time taken</h4>
        <p>{0.008 * txt.split(" ").length} min</p>
      </div>
    </>
  );
}
