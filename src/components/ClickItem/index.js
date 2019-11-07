import React from 'react';
import './style.css'
function ClickItem(props) {
    return (
        <img src={props.image}
            role="img"
            onClick={() => props.handleClick(props.id)}
            className="allImg"
        />

    )
}

export default ClickItem;