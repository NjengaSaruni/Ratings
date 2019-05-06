import React from 'react';
import ReactDOM from 'react-dom';

class Person extends React.Component {
    render(props) {
        return (
            <div className="person">
                <p>{this.props.person.name}</p>
                <img className="image" src={this.props.person.url} alt=""/>
            </div>
        )
    }

}

export default Person
