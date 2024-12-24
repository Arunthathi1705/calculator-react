import React from 'react'

const Display = ({ value , inputRef }) => {
 return (
    <div className="display">
      <input
        type="text"
        value={value}
        readOnly
        ref={inputRef}
      />
    </div>
  );
};

export default Display;
