import React from 'react';

export default function Counter(props) {
    return (
        <div className={"counter counter-"+props.player}></div>
    );
}