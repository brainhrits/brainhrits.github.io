import React from "react";
import "./partners.css";
import Amex from "./images/Amex.png";
import MasterCard from "./images/mastercard.png";
import Kaiser from "./images/kaiser.png";
import Roche from "./images/Roche.jpg";
import Walmart from "./images/Walmart.jpg";
import Wahbe from "./images/Wahbe.png";
import GS from "./images/GS.png";
import SlingTv from "./images/SlingTv.png";
import Bis from "./images/BioIntellisense.jpg";
import AllyBank from "./images/AllyBank.jpg";
import LifeScan from "./images/lifescan.png";
import Occ from "./images/Occ.png";
import Medtronic from "./images/Medtronic.png";
import RR from "./images/RR_Donnelley_logo.png";
import Oscar from "./images/Oscar.png";
import HealthFirst from "./images/healthfirst.png";
import TechMahindra from "./images/TechM.jpg";
import FreddieMac from "./images/freddie-mac.jpg";
import FannieMae from "./images/FannieMae.png";
import Hexware from "./images/hexaware.png";
import { motion } from "framer-motion";
import AppAnimations from "../../../../common/js/animations";
import SiliconValleyBank from "./images/SiliconValleyBank.png";
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
            {this.getPartenerLogoComponents()}
          </motion.div>
        </motion.div>
      </section>
    );
  }
  getPartenerLogoComponents() {
    return this.getParners().map((partner) => (
      <div className="partnerLogo">
        <img src={partner.image} alt={partner.name} />
      </div>
    ));
  }
  getParners() {
    return [
      {
        name: "Amex",
        image: Amex,
      },

      { name: "Kaiser", image: Kaiser },
      {
        name: "Roche",
        image: Roche,
      },

      {
        name: "MasterCard",
        image: MasterCard,
      },
      {
        name: "Wahbe",
        image: Wahbe,
      },
      {
        name: "Goldman Sachs",
        image: GS,
      },

      {
        name: "AllyBank",
        image: AllyBank,
      },
      {
        name: "BioIntelliSense",
        image: Bis,
      },
      {
        name: "Sling TV",
        image: SlingTv,
      },

      {
        name: "LifeScan",
        image: LifeScan,
      },

      {
        name: "Medtronic",
        image: Medtronic,
      },
      { name: "RR", image: RR },
      { name: "OscarHealth", image: Oscar },
      {
        name: "HealthFirst",
        image: HealthFirst,
      },
      {
        name: "Tech Mahindra",
        image: TechMahindra,
      },
      { name: "FreddieMac", image: FreddieMac },
      {
        name: "Walmart",
        image: Walmart,
      },

      {
        name: "FannieMae",
        image: FannieMae,
      },
      {
        name: "Occ",
        image: Occ,
      },
      {
        name: "Hexaware",
        image: Hexware,
      },
      {
        name: "SVB",
        image: SiliconValleyBank,
      },
    ];
  }
}
