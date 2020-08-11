import React from 'react';
import './Education.css';

export default class Description extends React.Component {
    render() {
        return <div className = 'description'>
            <h3>{this.props.title}</h3>
            <p>{this.props.description}</p>
        </div>
    }
}