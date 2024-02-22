import React from "react";

type AccordionPropsType = {
    title: string
    collapsed:boolean
}

export function Accordion(props:AccordionPropsType) {
    console.log("Accordion rendering")
    return (
        <div>
            {props.collapsed ? <><AccordionTitle title={props.title}/>
                <AccordionBody/></>:<AccordionTitle title={props.title}/>
}

        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
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

