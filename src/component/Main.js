import React from 'react';
import '../App.scss';
import Header from './head/Header';
import Division from './body/Division';
import TextBody from './body/TextBody';
const Main = () => {
    return <div className="app">
        <Header></Header>
        <Division></Division>
        <TextBody></TextBody>
    </div>;
}

export default Main;