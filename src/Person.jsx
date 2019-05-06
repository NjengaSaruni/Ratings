import React from 'react';
import ReactDOM from 'react-dom';

class Person extends React.Component {
    render(props) {
        return (
            <div className="person">
                <p>{props.person.name}</p>
                <img className="image" src={props.person.url} alt=""/>
            </div>
        )
    }

}

export default Person
