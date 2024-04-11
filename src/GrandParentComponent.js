import React from 'react';
import ParentComponent from './ParentComponent';
import './GrandParentComponent.css'; 
function GrandParentComponent() {
    return (
        <div id='GrandParent'>
            <h1>Grand Parent Component</h1>
            <ParentComponent name="Benjamin" age={50} />
        </div>
    );
};

export default GrandParentComponent;