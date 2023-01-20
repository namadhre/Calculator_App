
import React, { Component } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { ClearButton } from "./components/ClearButton";
import { evaluate } from "mathjs";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "0",
    };
  }

  addToInput = (value) => {
    if (this.state.input === "0") {
      this.setState({ input: (this.state.input = value) });
    } else {
      this.setState({ input: (this.state.input + value) });
    }
  };

  handleEqual = () => {
    this.setState({ input: evaluate((this.state.input).replaceAll('÷', '/')) });
  };

  handleSign = () => {
    this.setState({ input: evaluate(this.state.input + '*' + '-1') })
  }

  handlePercentage = () => {
    this.setState({ input: evaluate(this.state.input + "%") });
  }

  render() {
    return (
      <div className="app">
        <h1>Calculator</h1>
        <div className="calc-wrapper">
          <Input input={this.state.input} />
          <div className="row">
            <ClearButton handleClear={() => this.setState({ input: "0" })}>
              AC
            </ClearButton>
            <Button handleClick={() => this.handleSign()}>-/+</Button>
            <Button handleClick={() => this.handlePercentage()}>%</Button>
            <Button handleClick={this.addToInput}>÷</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInput}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>-</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>+</Button>
          </div>
          <div className="special-case">
            <Button handleClick={this.addToInput}>0</Button>
            <div className="column">
              <Button handleClick={this.addToInput}>.</Button>
              <Button handleClick={() => this.handleEqual()}>=</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
