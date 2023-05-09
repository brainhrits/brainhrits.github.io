import React from "react";
import "./partners.css";
import intraEdge from "./images/intraEdge.png";
import { motion } from "framer-motion";
import AppAnimations from "../../../../common/js/animations";
export default class Partners extends React.Component {
  render() {
    return (
      <section className="section">
        <motion.div
          variants={AppAnimations.none}
          initial="hidden"
          whileInView="visible"
        >
          <motion.div
            variants={AppAnimations.slideToTop}
            className="partnersHeading"
          >
            Our Partners
          </motion.div>
          <motion.div
            variants={AppAnimations.slideToTop}
            className="partnersHeadingSeperator"
          ></motion.div>
          <motion.div
            variants={AppAnimations.slideToTop}
            className="partnerLogos"
          >
            <div className="partnerLogo">
              <img src={intraEdge}></img>
            </div>
            <div className="partnerLogo">
              <img src={intraEdge}></img>
            </div>
            <div className="partnerLogo">
              <img src={intraEdge}></img>
            </div>
            <div className="partnerLogo">
              <img src={intraEdge}></img>
            </div>
            <div className="partnerLogo">
              <img src={intraEdge}></img>
            </div>
          </motion.div>
        </motion.div>
      </section>
    );
  }
}
