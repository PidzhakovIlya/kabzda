import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";

function App() {
    console.log("App rendering")
    const [switchOn, setSwitchOn] = useState<boolean>(true)
    const [ratingValue, setRatingValue] = useState<RatingValueType>(1)
    const [collapsed, setCollapsed] = useState<boolean>(false)

    return (
        <div className="App">
            <OnOff toggle={switchOn} turn = {setSwitchOn}/>
            <Accordion title={"Menu"} collapsed={collapsed} onChange={()=>setCollapsed(!collapsed)}/>
            {/*<Accordion title={"Menu"} collapsed={collapsed} onClick={setCollapsed}/>*/}
            <UncontrolledAccordion title={'City'}/>
            {/*<PageTitle title = 'This App Title'/>*/}
            {/*<PageTitle title = 'This Application Title'/>*/}
            {/*<Accordion title={'HTML'} collapsed = {true}/>*/}
            {/*<Accordion title={'REACT'}  collapsed = {false}/>*/}
            <Rating value={ratingValue} setRatingValue={setRatingValue}/>
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
