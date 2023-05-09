import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.interval = 20;
    this.state = {
      count: 0,
      maxCount: this.props.maxCount ? this.props.maxCount : 0,
      duration: this.props.duration ? this.props.duration * 1000 : 5 * 1000,
    };
    this.increment = this.props.maxCount / 100;
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), this.interval);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    if (this.state.count < this.state.maxCount) {
      this.setState((prevState) => {
        var tempCount = prevState.count + this.increment;
        tempCount = Math.ceil(
          tempCount > prevState.maxCount ? prevState.maxCount : tempCount
        );
        return {
          count: tempCount,
        };
      });
    } else {
      clearInterval(this.timerID);
    }
  }
  render() {
    return <>{this.state.count}</>;
  }
}
