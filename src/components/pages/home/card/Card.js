import React from "react";
import { motion } from "framer-motion";
import "./card.css";

class Card extends React.Component {
  render() {
    return (
      <motion.div
        variants={this.props.animationVariant}
        initial="hidden"
        whileInView="visible"
        className="homeCard"
      >
        <div className="icon">
          <i className={this.props.icon}></i>
        </div>
        <div className="content">
          <h2 className="title">{this.props.title}</h2>
          <h5 className="description">{this.props.description}</h5>
        </div>
      </motion.div>
    );
  }
}
export default Card;
