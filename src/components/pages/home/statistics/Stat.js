import React from "react";
import Counter from "./Counter";

export default class Stat extends React.Component {
  render() {
    return (
      <div className="stat">
        <div className="statIcon">
          <i className={this.props.icon}></i>
        </div>
        <span>
          <Counter
            maxCount={this.props.maxCount}
            duration={this.props.duration}
          ></Counter>
        </span>
        <span>{this.props.suffix}</span>
        <div className="statDescription">{this.props.description}</div>
      </div>
    );
  }
}
