import React, {useState} from 'react';



export default function TextForm(props) {

  const[text, setText] = useState("Enter Text here");

  const handleUpClick = () => {
    console.log("upperCase was clicked")
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleLowClick = () => {
    console.log("lowerCase was clicked")
    let newText = text.toLowerCase();
    setText(newText)
  }

  const handleOnChange = (e) => {
    console.log("on Change")
    setText(e.target.value)
  }


  return (
    <>
    <div className= "container">
        <h1>{props.heading}</h1>
      <div className="mb-3">
         <label htmlFor="myBox" className="form-label"></label>
         <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick} >Convert to LowerCase</button>
    </div>
    <div className="container my-3">
         <h2>your text summary</h2>
         <p> {text.split(" ").length} words and {text.length} character</p>  
         <p> {0.08*text.split(" ").length} Minutes read</p> 
         <h2>Preview</h2>
         <p>{text}</p>  
    </div>
    </>
  )
}
