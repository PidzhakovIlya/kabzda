import React, {useState} from "react";

type RatingPropsType = {
    value: 0|1|2|3|4|5
}

export function Rating(props: RatingPropsType) {
    console.log("Rating rendering")
    const [valueStar, setValueStar] = useState<number>(0)
        return <div>
            <Star selected={valueStar>0} value={1} setValueStar={setValueStar}/>
            <Star selected={valueStar>1} value={2} setValueStar={setValueStar}/>
            <Star selected={valueStar>2} value={3} setValueStar={setValueStar}/>
            <Star selected={valueStar>3} value={4} setValueStar={setValueStar}/>
            <Star selected={valueStar>4} value={5} setValueStar={setValueStar}/>
        </div>
}

type StarPropsType= {
    selected:boolean
    value:number
    setValueStar:(value:number)=>void
}

function Star(props: StarPropsType) {
    console.log("star rendering")
    return (
        props.selected ?
            <span onClick={()=>props.setValueStar(props.value-1)}> <b>star</b></span>
            :
            <span onClick={()=>props.setValueStar(props.value)}> star </span>
    )
}