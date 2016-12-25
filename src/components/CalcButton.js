import React, { Component, PropTypes } from 'react';

class CalcButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        console.log('hey');
        this.props.ifClicked(this.props.value);
    }
    render() {
        return (
            <div className="calcButton" onClick={this.handleClick}>
            {this.props.value}
           </div>
    )
    }
}


export default CalcButton;