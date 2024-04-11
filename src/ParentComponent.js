import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent(props) {
    return (
        <div>
            <h1>Parent Component</h1>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <ChildComponent name="John" age={30} />
        </div>
    );
};

export default ParentComponent;