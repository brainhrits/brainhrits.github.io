import React from "react";
import { motion } from "framer-motion";
import "./leader.css";
import AppAnimations from "../../../../common/js/animations";

import happyTeam1 from "./images/happy-team.jpeg";
import happyTeam2 from "./images/happy-team-2.jpeg";
class Leader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { industryIndex: 0 };
    this.industries = ["Corporate IT Resouring", "IT Staffing"];
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 4000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState((prevState) => {
      return {
        industryIndex:
          prevState.industryIndex < this.industries.length - 1
            ? prevState.industryIndex + 1
            : 0,
      };
    });
  }
  render() {
    const industries = [
      "Corporate IT Resource",
      "IT Staffing",
      "Digital Transformation",
    ];
    return (
      <section className="leaderSection">
        <div className="leaderContainerOuter">
          <div className="leaderContainerInner">
            <span className="title">We Are A Leader In</span>{" "}
            <div>
              {industries.map((ind, index) => {
                return (
                  this.state.industryIndex == index && (
                    <motion.div
                      className="title"
                      variants={AppAnimations.SentenceTyping}
                      initial="hidden"
                      whileInView="visible"
                      style={{ display: "inline" }}
                      key={ind}
                    >
                      {ind.split("").map((char, index) => {
                        return (
                          <motion.span
                            variants={AppAnimations.LetterTyping}
                            className="industryName"
                            key={char + "-" + index}
                          >
                            {char}
                          </motion.span>
                        );
                      })}
                    </motion.div>
                  )
                );
              })}
            </div>
            <div className="sub-text">
              BrainHR IT Solutions provides services that improve the way
              business is done in the world.
            </div>
            <div className="learnBtn">
              <a href="#" className="btn-full">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <motion.div
          className="happyTeam1"
          style={{ backgroundImage: `url(${happyTeam1})` }}
          variants={AppAnimations.slideToLeft}
          initial="hidden"
          whileInView="visible"
        ></motion.div>
        <motion.div
          className="happyTeam2"
          style={{ backgroundImage: `url(${happyTeam2})` }}
          variants={AppAnimations.slideToRight}
          initial="hidden"
          whileInView="visible"
        ></motion.div>
      </section>
    );
  }
}
export default Leader;
