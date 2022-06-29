import React, {useState} from 'react';



export default function TextForm(props) {

  const[text, setText] = useState("");

  const handleUpClick = () => {
    console.log("upperCase was clicked")
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase!","success");
  }

  const handleLowClick = () => {
    console.log("lowerCase was clicked")
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!","success");
  }

  const handleClearText = () => {
    let newText = (" ");
    setText(newText)
    props.showAlert("Cleared text","success");
  }

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard!","success");
  }

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed!","success");
  }
  



  //const handleTitleClick = () => {
    //console.log("tile case")
    //let newText = text.toLowerCase();
    //setText(newText)
  //}

  const handleOnChange = (e) => {
    console.log("on Change")
    setText(e.target.value)
  }


  return (
    <>
    <div className= "container"  style={{color:props.mode==="dark"?'white':'#042743'}}>
        <h1 className='mb-4'>{props.heading}</h1>
      <div className="mb-3">
         <label htmlFor="myBox" className="form-label"></label>
         <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==="dark"?'#13466e':'white' , color:props.mode==="dark"?'white':'#042743' }} id="myBox" rows="8"></textarea>
      </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick} >Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearText} >Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy} >Copy</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace} >Remove Extra Spaces</button>
    </div>
    <div className="container my-3"  style={{color:props.mode==="dark"?'white':'#042743'}}>
         <h2>your text summary</h2>
         <p> {text.split(" ").filter((element) =>{return element.length !==0}).length} words and {text.length} character</p>  
         <p> {0.08*text.split(" ").filter((element) =>{return element.length !==0}).length} Minutes read</p> 
         <h2>Preview</h2>
         <p>{text.length>0?text:"nothing to preview"}</p>  
    </div>
    </>
  )
}
