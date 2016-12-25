import React, { Component, PropTypes } from 'react';
import Calculator from '../components/Calculator';
import CalcButton from '../components/CalcButton';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            operand1: '0',
            operand2: '0',
            initial: true,
        }
        this.updateOperand = this.updateOperand.bind(this);
        this.prepCalc = this.prepCalc.bind(this);
        this.doAdd = this.doAdd.bind(this);
        this.doDiv = this.doDiv.bind(this);
        this.doMul = this.doMul.bind(this);
        this.doSub = this.doSub.bind(this);
        this.doCalc = this.doCalc.bind(this);
        this.clear = this.clear.bind(this);
    }

    updateOperand(value) {
        let newVal;
        if(this.state.initial) {
            newVal = value;
        } else {
            newVal = this.state.operand1 + value;
        }
        this.setState({
            operand1: newVal,
            initial: false,
        });
    }
    prepCalc(calcFn) {
        this.setState({
            operand2: this.state.operand1,
            operand1: 0,
            calcFn: calcFn,
            initial: true,
        });
    }

    doDiv() {
        console.log(this.state.operand2);
        console.log(this.state.operand1);
        this.setState({
            operand1: this.state.operand2 / this.state.operand1
        });
    }

    doMul() {
        this.setState({
            operand1: this.state.operand2 - this.state.operand1
        });
    }

    doSub() {
        this.setState({
            operand1: this.state.operand2 * this.state.operand1
        });
    }

    doAdd() {
        this.setState({
            operand1: parseInt(this.state.operand2) + parseInt(this.state.operand1)
        });
    }

    doCalc() {
        this.state.calcFn();
        console.log(this.state.operand2);
        console.log(this.state.operand1);
        this.setState({initial: true})
    }

    clear() {
        this.setState( {
            operand1: '0',
            operand2: '0',
            calcFn: '',
            initial: true,
        })
    }

    render() {
        return (
            <div className="calDisplay">
               <Calculator displayNumber={this.state.operand1} />
               <div>
                 <CalcButton value="1" ifClicked={this.updateOperand} />
                 <CalcButton value="2" ifClicked={this.updateOperand} />
                 <CalcButton value="3" ifClicked={this.updateOperand} />
                 <CalcButton value="/" ifClicked={this.prepCalc.bind(this, this.doDiv)} />
                </div>
                <div>
                    <CalcButton value="4" ifClicked={this.updateOperand} />
                    <CalcButton value="5" ifClicked={this.updateOperand} />
                    <CalcButton value="6" ifClicked={this.updateOperand} />
                    <CalcButton value="*" ifClicked={this.prepCalc.bind(this, this.doMul)} />
                </div>
                <div>
                    <CalcButton value="7" ifClicked={this.updateOperand} />
                    <CalcButton value="8" ifClicked={this.updateOperand} />
                    <CalcButton value="9" ifClicked={this.updateOperand} />
                    <CalcButton value="/" ifClicked={this.prepCalc.bind(this, this.doDiv)} />
                </div>
                <div>
                    <CalcButton value="c" ifClicked={this.clear} />
                    <CalcButton value="0" ifClicked={this.updateOperand} />
                    <CalcButton value="=" ifClicked={this.doCalc} />
                    <CalcButton value="+" ifClicked={this.prepCalc.bind(this, this.doAdd)} />
                </div>
            </div>
        )
    }
}


export default Main;