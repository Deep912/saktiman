import React, { useState } from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () =>{
    setText(text.toUpperCase() );
    props.showAlert("converted to uppercase", "success");
  }

  const handleLowClick = () => {
    setText(text.toLowerCase());
    props.showAlert("coverted to lowercase")
  }

  const handleBaseEnClick = () => {
    setText(btoa(text));
  
    props.showAlert("converted to base64", "success");
  }

  const handleBaseDeClick = () => {
    setText(atob(text));
    props.showAlert("converted from base64", "success");

  }
  const handleCopy = ()=>{
    var text = document.getElementById("mybox");
    text.select();
    text.getSelectionRange(0 ,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("copt to clipboard", "success") 
  }
  const handleOnChange = (event) =>{
    console.log("on change");
    setText(event.target.value);
  }
  return (
    <>

{/* style={{backgroundColor:props.mode === "light"? 'dark' : 'light'}} */}
    <div className="container my-4" style={{color : props.mode==='dark'?'white':'black'}}>
    <div className="form-floating">
    <textarea className={`form-control bg-${props.mode === "light"? 'light' : 'dark'}`} style={{color : props.mode==='dark'?'white':'black'}} rows="20" value={text} id="myBox" placeholder={props.heading} onChange={handleOnChange}></textarea>
    

    <button type="button" className="btn btn-primary m-2" onClick={handleBaseEnClick}>Encode to base64</button>
    <button type="button" className="btn btn-primary m-2" onClick={handleBaseDeClick}>Decode from base64</button>
    <button type="button" className="btn btn-primary m-2" onClick={handleUpClick}>Convert to Big SAKTIMAN</button>
    <button type="button" className="btn btn-primary m-2" onClick={handleLowClick}>Convert to small saktiman</button>
    
  </div>
  
  <div className="container m-3">
  <h2>Your text summary</h2>
  <p>{text.split(" ").length} words and {text.length} characters</p>
  <p>{0.008 * text.split("").length}Minutes read</p>
  <h2>preview</h2>
  <p>{text.length>0?text:"enter something to preview"}</p>
 
  </div>
  </div>
  </>
  )
}
