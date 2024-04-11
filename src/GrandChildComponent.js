import React from 'react';

function GrandChildComponent(props) {
  return (
    <div>
      <h2>Grand Child Component</h2>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
};

export default GrandChildComponent;