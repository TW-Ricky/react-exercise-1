import React from 'react';
import AboutMe from './AboutMe';
import EducationBody from './EducationBody';

const TextBody = () => {
    return <div className = 'body' style = {{padding: '20px'}}>
        <AboutMe></AboutMe>
        <EducationBody></EducationBody>
    </div>
}

export default TextBody;