import React from 'react';
import './Education.css';

export default class Time extends React.Component {
    render() {
        return <div className = 'time'>
            <h3>{this.props.time}</h3>
        </div>
    }
}