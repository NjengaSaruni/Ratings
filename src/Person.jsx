import React from 'react';
import ReactDOM from 'react-dom';

function Person(props) {
    return (
        <div className="person">
           <p>{props.person.name}</p>
            <img src={props.person.url} alt=""/>
        </div>
    )
}

export default Person
