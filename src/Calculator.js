import React from 'react';
import { evaluate } from 'mathjs';
import { useRef } from "react";
import { useState } from 'react';
import Display from './Display';
import Button from './Button';
import useWindowSize from './useWindowSize';

    
  const Calculator=() =>{
  const inputRef = useRef();
  const[value, setValue]=useState(''); 
  useWindowSize();
    

  const handleClear=()=>{
    setValue('');
    if(inputRef.current){
      inputRef.current.focus();
    }
  };

  const handleDelete=()=>{
    setValue((value || '').toString().slice(0,-1));
    if(inputRef.current){
      inputRef.current.focus();
    }
  } 

const handleClick = (btn) => {
  if (["+", "-", "×", "÷","."].includes(btn)) {
    if (
        value === "" || ["+", "-", "×", "÷","."].includes(value.slice(-1)) 
      ) {
      return; 
        }
    }
  setValue((prev) => prev + btn);
  };

const calculateResult = () => {
    try {
      const expression = value.replace(/×/g, "*").replace(/÷/g, "/");
      const result = evaluate(expression);
      setValue(result.toString());
    } 
    catch (error) {
      setValue("Error");
    }
  };

  
  return (
    <div className="calculator">
      <form>
        <Display 
        value={value}
        inputRef={inputRef}/>
        <div>
          <Button label="AC" onClick={handleClear}/>
          <Button label="DE" onClick={handleDelete}/>
          <Button label="." onClick={()=>handleClick('.')}/>
          <Button label="÷" onClick={()=>handleClick('÷')}/>
        </div>
        <div> 
          {['7','8','9','×'].map((btn) => (
            <Button key={btn} label={btn} onClick={()=> handleClick(btn)}/>
          ))}
        </div>
        <div> 
          {['4','5','6','+'].map((btn) => (
            <Button key={btn} label={btn} onClick={()=> handleClick(btn)}/>
          ))}
        </div>
        <div> 
          {['1','2','3','-'].map((btn) => (
            <Button key={btn} label={btn} onClick={()=> handleClick(btn)}/>
          ))}
        </div>
        <div> 
          {['00','0','='].map((btn) => (
            <Button
             key={btn} 
             label={btn}
             onClick={btn === "=" ? calculateResult : () => handleClick(btn)}
             className={btn==='=' ? "equal": ''}
             />
          ))}
        </div>
      </form>
    </div>
    );
  };

export default Calculator