import React from 'react';

type OnOffPropsType = {
    toggle: boolean
    turn: (value: boolean) => void
}

export const OnOff = (props: OnOffPropsType) => {
    return (
        <div className={'toggle'}>
            <div className={`btn  ${props.toggle ? 'turn-on' : null}`}
                 onClick={() => props.turn(true)}>
                On
            </div>
            <div className={`btn  ${!props.toggle ? 'turn-off' : undefined}`}
                 onClick={() => props.turn(false)}>
                Off
            </div>
            <div className={`indicator ${props.toggle ? 'indication-on' : 'indication-off'}`}></div>
        </div>
    );
};

