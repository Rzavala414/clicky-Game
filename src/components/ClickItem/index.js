import React from 'react';
import './style.css';

export default class ClickItem extends React.Component {
   

    render() {
        return( 
            <img src={this.props.image}
            role="img"
            onClick={() => this.props.handleClick(this.props.id)}
            className="allImg"/>
            )
    }
}
