import { useState } from "react"
import React  from 'react'

export default function Formstext(props) {
    const onclick = ()=>{
        // console.log("button is clicked");
        const up = text.toUpperCase()
        Settext(up);
        props.showalert("Converted into UpperCase", "Success");

    }
      const onchangehandle = (event)=>{
       Settext(event.target.value)
      } 
    const [text, Settext] = useState("enter your text");

    //Global declaration:
   let [count, setCount] = useState(0);
   let [count1, setCount1] = useState(0);
   let countChar = 0,
   countCons = 0;

   // Function to count Vowels:

const handleVoClick = () => {
    for (count = 0; count <= text.length; count++) {
      if (text.charAt(count).match(/[aeiouAEIOU]/)) {
        countChar++;
        setCount (countChar);
      }
    } props.showalert("Showing no of Vowels", "Success");

    // console.log("No. of Vowels are: " + countChar);
  };

 // Function to count Consonants:
  const handleCoClick = () => {
    for (count1 = 0; count1 <= text.length; count1++) {
      if (
        text
          .charAt(count1)
          .match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/)
      ) {
        countCons++;
        setCount1(countCons);
      }
    }props.showalert("Showing no of Consonents", "Success");
}
const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showalert("Speaking", "Success");
}
const clear = () => {
    Settext("");
    props.showalert("Text is Cleared", "Success");
}
 const handlecopy = ()=>{
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert("Text is Copied to Clipboard", "Success");

 }
    
  return (
        <>
      <div className="container " style ={{color: props.Mode ==='light'?'black':'white'}}>
       <h1 className="my-3">{props.heading} </h1>
       <div className="mb-3 ">
       <textarea className="form-control" value={text} onChange={onchangehandle} style ={{backgroundColor : props.Mode ==='light'?'white ':'grey',color :props.Mode ==='light'?'black':'white'}} id="myBox" rows="8"> 
      </textarea>
     </div>
     <button className="btn btn-primary" onClick={onclick}>Convert Into Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleVoClick}> Count no. of Vowels</button>       
     <button className="btn btn-primary mx-2" onClick={handleCoClick}>Count no. of Consonants</button> 
     <button type="submit" onClick={speak} className="btn btn-warning mx-2 ">Speak</button>
     <button type="submit" onClick={handlecopy} className="btn btn-primary mx-2 ">Copy Text</button>
     <button  onClick={clear} className="btn btn-primary mx-2 ">Clear</button></div>
     <div  style ={{color: props.Mode ==='light'?'black':'white'}}> 
     <h2>Summary</h2>
     <p>{text.split(" ").length} Words {text.length} Characters</p>
     <h3>You have entered:</h3>
     <p>{count} No. of Vowels</p>
     <p>{count1} No. of Consonants</p>
    </div>
    </>
  )
}
