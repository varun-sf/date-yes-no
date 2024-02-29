
import React, { useState } from 'react';
import PropTypes from 'prop-types'


const Main = (props)=> {
    const [buttonText, setButtonText] = useState("No");
    const [buttonSize, setButtonSize] = useState(1);
    const [index,setIndex] = useState(0);
   
    const arr=["Why, No?","Press Yes na","Please press yes","Plz Mam","You will miss a great day","You will miss a great day with Varun!!!","Pleaseeeeeee","Pleaseeeeeee","Enough madam you want to explode the screen?"]
    let nose =()=>{
      setButtonSize(buttonSize+1);
      if(index>8){return;}
      setButtonText(arr[index]);
      if(index<=8){
        setIndex(index+1);
      }
  
  }
  
  let yesbro =()=>{
    props.setLoading(true);
  }
    return (
        <>
        <h1>Would you like to go for a dinner?</h1>
      <div className='container'>
      <button type="button" className="btn btn-primary mx-2" onClick={yesbro} style={{fontSize:`${buttonSize}em`}}>Yes</button>
      <button type="button" className="btn btn-primary" onClick={nose} >{buttonText}</button>
      </div>
      </>
    )
  
}

export default Main;