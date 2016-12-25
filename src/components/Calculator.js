import React, { Component, PropTypes } from 'react';

class Calculator extends Component {
    render() {
        return (
            <div className="calDisplayScreen">
            {this.props.displayNumber}
    </div>
    )
    }
}


export default Calculator;
