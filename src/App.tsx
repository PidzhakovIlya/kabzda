import React from 'react';
import './App.css';

function App() {
    console.log("App rendering")
    return (
        <div className="App">
            <AppTitle/>
            <Rating/>
            <Accardion/>
        </div>
    );
}

function AppTitle() {
    console.log("AppTitle rendering")
    return <>"App Title"</>
}

function Rating() {
    console.log("Rating rendering")
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    )
}

function AccorionTitle() {
    console.log("AccorionTitle rendered")
    return (
        <h3>menu</h3>
    )
}

function AccordionBody() {
    console.log("AccordionBody rendered")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

function Accardion() {
    console.log("Accordion rendering")
    return (
        <div>
            <AccorionTitle/>
            <AccordionBody/>
        </div>
    )
}

function Star() {
    console.log("star rendering")
    return (
        <div>star</div>
    )
}


export default App;
