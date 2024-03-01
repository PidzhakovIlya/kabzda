import React from "react";

export type RatingPropsType = {
    value: RatingValueType
    setRatingValue: (value: RatingValueType) => void
}
export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

export function Rating(props: RatingPropsType) {
    console.log("Rating rendering")
    return <div>
        <Star selected={props.value > 0} value={1} onClick={props.setRatingValue}/>
        <Star selected={props.value > 1} value={2} onClick={props.setRatingValue}/>
        <Star selected={props.value > 2} value={3} onClick={props.setRatingValue}/>
        <Star selected={props.value > 3} value={4} onClick={props.setRatingValue}/>
        <Star selected={props.value > 4} value={5} onClick={props.setRatingValue}/>
    </div>
}

type StarPropsType = {
    selected: boolean
    onClick: (value: RatingValueType) => void
    value: RatingValueType
}

function Star(props: StarPropsType) {
    console.log("star rendering")
    return (
        <span onClick={() => props.onClick(props.value)}> {props.selected ? <b> star</b> : " star"} </span>
    )
}