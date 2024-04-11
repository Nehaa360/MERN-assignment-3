import React, { useState } from 'react';
import GrandChildComponent from './GrandChildComponent';

function ChildComponent(props) {
  const [Childprops, setChildProps] = useState({
    name: "John",
    age: 30
  });

  const updateProps = () => {
    setChildProps({
      name: "Conrad",
      age: 25
    });
  };
  const handleClick = () => {
    alert(`Hello, guys from ${Childprops.name}`);
  };

  return (
    <div>
      <h1>Child Component</h1>
      <button onClick={updateProps}>Other Child</button>
      <button onClick={handleClick}>Greetings</button>
      <p>Name: {Childprops.name}</p>
      <p>Age: {Childprops.age}</p>
      <GrandChildComponent name="Jeremy" age={3} />
    </div>
  );
}
export default ChildComponent;