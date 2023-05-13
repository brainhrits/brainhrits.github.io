import { motion } from "framer-motion";
import React from "react";
import "./infoSection.css";
import AppAnimations from "../../../common/js/animations";
class InfoSection extends React.Component {
  render() {
    return (
      <section className="section">
        <motion.div
          className="intro-section"
          variants={AppAnimations.none}
          initial="hidden"
          whileInView="visible"
        >
          <motion.div
            variants={AppAnimations.slideToRight}
            className="intro-section-details"
          >
            <div className="section-name">{this.props.name}</div>
            <div className="section-title">{this.props.title}</div>
            <div className="section-title-seperator"></div>
            <div className="section-description">{this.props.children}</div>
          </motion.div>
          {this.props.image && (
            <motion.div
              variants={AppAnimations.slideToRight}
              className="intro-section-img"
            >
              <img src={this.props.image} alt="introduction" />
            </motion.div>
          )}
        </motion.div>
      </section>
    );
  }
}
export default InfoSection;
