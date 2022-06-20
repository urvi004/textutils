import React, {useState} from 'react';



export default function TextForm(props) {

  const[text, setText] = useState("Enter Text here");

  const handleUpClick = () => {
    console.log("upperCase was clicked")
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleOnChange = (e) => {
    console.log("on Change")
    setText(e.target.value)
  }


  return (
    <div>
        <h1>{props.heading}</h1>
      <div className="mb-3">
         <label htmlFor="myBox" className="form-label"></label>
         <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick} >Convert to UpperCase</button>
    </div>
  )
}
