import React from 'react'

const Button = ({label,onClick,className=''}) => {
  return (
   
        <input 
        type="button"
        value={label}
        onClick={onClick}
        className={className}/>
    
  );
}

export default Button;