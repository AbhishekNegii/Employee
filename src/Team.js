import React, { useState } from "react";

const Team = (props) => {
  const removeHandler = (item) => {
    
  };

  return (
    <div>
      <h1>Team</h1>
      {props.data.map((item) => {
        return (
          <li>
            {item}
            <button onClick={()=>removeHandler(item)}>Remove</button>
          </li>
        );
      })}
    </div>
  );
};

export default Team;
