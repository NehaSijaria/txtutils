import {React, useState} from 'react'

export default function TextForm1(props) {

  const [txt, setTxt] = useState('Type your text');
  //setTxt update txt which is then render on update
  //when btn cicked => Update txt(state) to uppercase
  //txt = " hello " //wrong because txt is a state & get update thru setTxt();
  const handleClick = () => {
    console.log('TEXT======', txt)
    setTxt(txt.toUpperCase())
  } 
  
//event obj is available onChange => used on input/txtarea 
//value of txtarea becomes txt + whatevery types
  const handleonChange = (e) => {
    setTxt(e.target.value)
    console.log('onChange wkg');
  };
 
  return (
    <div>
      <h3>{props.heading}</h3>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="textbox"
          rows="8"
          value={ txt }
          onChange = {handleonChange}
          
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleClick}>Change to UpperCase</button>
    </div>
  )
}
