import React from "react";



export function Accardion(props:any) {
    console.log("Accordion rendering")
    return (
        <div>
            <AccorionTitle title={props.title}/>
            <AccordionBody/>
        </div>
    )
}

function AccorionTitle(props: any) {
    console.log("AccordionTitle rendered")
    return (
        <h3>{props.title}</h3>
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

