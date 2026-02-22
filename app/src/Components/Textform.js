import React,{useState}  from 'react'
import "./Style.css"

function Textform() {
  
  const Upperclick = ()=> {
    let x = text.toUpperCase();
    setText(x);
  }

    const Lowerclick = ()=> {
    let x = text.toLowerCase();
    setText(x);
  }

  const space = ()=> {
  let x =text.split(/\s+/).join(" ").trim();
  setText(x);
}
  const clear = ()=> {
  let x = '';
  setText(x);
}
  


  const onChangefun = (event)=> {
    setText(event.target.value);
  }

 

  const [text,setText] = useState('');


  return (
    <>
      <div className='container'>
        <div className="head" href="/" >Enter Text below</div>
        <textarea name="text" id="textarea" placeholder="Enter text here" value={text} onChange={onChangefun} rows='8'></textarea>
      </div>
      <div className="container">

        <button disabled={text.length===0} type="button" className="btn btn-light mx-1 my 1" onClick={Upperclick}>To Upper</button>
        <button disabled={text.length===0} type="button" className="btn btn-light mx-1 my-1" onClick={Lowerclick}>To Lower</button>
        <button disabled={text.length===0} style={{width:"180px"}} type="button" className="btn btn-light mx-1 my-1" onClick={space}>Remove Extra Space</button>
        <button disabled={text.length===0} style={{width:"70px"}} type="button" className="btn btn-light mx-1 my-1" onClick={clear}>Clear</button>

      </div>

      <div className="container">
        In Your Text Total Words : {text.split(" ").filter((element)=>{return element.length!==0}).length} and Characters : {text.length} 
      </div>

    </>
  )
}

export default Textform
