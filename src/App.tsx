import React from 'react';
import './App.css';
import {Accardion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    console.log("App rendering")
    return (
        <div className="App">
            <PageTitle title = 'This App Title'/>
            Article 1
            <Rating value={3}/>
            <PageTitle title = 'This Application Title'/>
            <Accardion title={'HTML'}/>
            <Accardion title={'REACT'}/>
            Article 2
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

function PageTitle(props: any) {
    console.log("AppTitle rendering")
    return <>{props.title}</>
}



export default App;
