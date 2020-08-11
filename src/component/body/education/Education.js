import React from 'react';
import Time from './Time';
import Description from './Description';

export default class Education extends React.Component {

    render() {
        return <div className = "education">
            <Time time = {this.props.time}/>
            <Description title = {this.props.title} description = {this.props.description}/>
        </div>
    }
}