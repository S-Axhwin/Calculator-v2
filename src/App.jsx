import { useState } from 'react'
import './App.css'

export function Btn({ text, click }){
  return (<button 
    onClick={click}
    id={text}>
    {text}
  </button>)
}

function App() {

  const [exp, setExp] = useState("");

  function operation(text){
    switch (text){
      case "AC":
        setExp("");
        break;
      case "C":
        setExp(exp.slice(0,exp.length-1));
        break
      case "=":
        setExp(eval(exp).toString());
        break
      default:
        console.log('came to defalt');
    }
  }

  function handleClick (text){
    !["AC", "C", "="].includes(text) ? setExp(exp.concat(text)) : operation(text);
  }
  let arr = ["AC", "C", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "00", "0", ".", "="];

  return (
    <div className='contain'>
      <div className='btn-container'>
      <input type="text" id='display' value={exp} />
        {arr.map((text)=>{
          return <Btn text={text} click={()=>handleClick(text)} />
        }
        )}
      </div>
    </div>
  )
}

export default App
