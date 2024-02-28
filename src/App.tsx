import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";

function App() {
    console.log("App rendering")
    const [ toggle, setToggle] = useState<boolean>(true)
    return (
        <div className="App">
            <OnOff toggle={toggle} turn = {setToggle}/>
            <Accordion title={"Menu"} collapsed={true}/>
            <UncontrolledAccordion title={'City'}/>
            {/*<PageTitle title = 'This App Title'/>*/}
            {/*<PageTitle title = 'This Application Title'/>*/}
            {/*<Accordion title={'HTML'} collapsed = {true}/>*/}
            {/*<Accordion title={'REACT'}  collapsed = {false}/>*/}
            <Rating value={3}/>
            <UncontrolledRating/>
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
        </div>
    );
}

type PagePropsType = {
    title:string
}

function PageTitle(props: PagePropsType) {
    console.log("AppTitle rendering")
    return <>{props.title}</>
}



export default App;
