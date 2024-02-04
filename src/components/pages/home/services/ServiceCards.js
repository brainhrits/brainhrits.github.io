import React from "react";
import { motion } from "framer-motion";

import "./serviceCards.css";
import ServiceCard from "./ServiceCard";
import AppAnimations from "../../../../common/js/animations";

export default class ServiceCards extends React.Component {
  render() {
    return (
      <section className="section" id="servicesSection">
        <motion.div
          // variants={AppAnimations.none}
          initial="hidden"
          whileInView="visible"
          className="services"
        >
          <motion.div
            // variants={AppAnimations.slideToTop}
            className="servicesHeading"
          >
            OUR SERVICES
          </motion.div>
          <motion.div
            // variants={AppAnimations.slideToTop}
            className="servicesSubHeading"
          >
            What We Provide
          </motion.div>
          <motion.div
            // variants={AppAnimations.slideToTop}
            className="servicesHeadingSeperator"
          >
            &nbsp;
          </motion.div>
          <motion.div
            // variants={AppAnimations.slideToTop}
            className="servicesHeadingSubText"
          >
            BrainHR IT Solutions is a provider of IT management solutions for
            companies and organizations around the world. Over the past decade,
            we've helped our clients reduce their costs, improve their
            performance, and achieve more with their IT infrastructure.
          </motion.div>
          <motion.div
            // variants={AppAnimations.slideToTop}
            className="serviceCards"
          >
            <ServiceCard
              icon="fas fa-users-viewfinder"
              title="Consulting"
              description="Empower your business with expert guidance and customized solutions tailored to your unique needs, provided by BrainHR Consulting services, unlocking the full potential of your workforce and driving sustainable growth in today's dynamic business landscape"
              link="/services/consulting"
            ></ServiceCard>
            <ServiceCard
              icon="fas fa-laptop-code"
              title="Information Technology"
              description="Transform your technology landscape with innovative solutions and unparalleled expertise from BrainHR Information Technology services, leveraging cutting-edge technologies and best practices to optimize your operations, enhance user experiences and drive innovative transformation in the ever-evolving world of IT"
              link="/services/it"
            ></ServiceCard>
            <ServiceCard
              icon="fas fa-chalkboard-teacher"
              title="Trainings"
              description="Train your workforce with the skills and knowledge they need to thrive in today's rapidly changing business environment, through comprehensive and customized training programs offered by BrainHR Training services, equipping your teams with the tools and expertise to drive innovation, collaboration, and growth"
              link="/services/trainings"
            ></ServiceCard>
            <ServiceCard
              icon="fas fa-plane"
              title="Onsite-Offshore Model"
              description="Maximize your global competitiveness with BrainHR Onsite Offshore model services, providing a unique blend of on-site and offshore expertise to optimize your operations, reduce costs, and accelerate your time-to-market, all while ensuring unparalleled quality, security, and customer satisfaction"
              link="/services/onsite-offshore"
            ></ServiceCard>
            <ServiceCard
              icon="fas fa-briefcase"
              title="Outsourcing"
              description="Unleash the full potential of your business with BrainHR Outsourcing services, offering end-to-end solutions that streamline your operations, reduce costs, and free up your resources to focus on core business activities, all while ensuring unparalleled quality, flexibility, and agility in today's dynamic marketplace"
              link="/services/outsourcing"
            ></ServiceCard>
            <ServiceCard
              icon="fa-solid fa-bullhorn"
              title="Digital Marketing"
              description="Drive your business growth and brand awareness with BrainHR Digital Marketing services, leveraging innovative strategies, data-driven insights, and cutting-edge technologies to connect with your target audience, optimize your online presence, and unlock new opportunities for engagement and revenue generation in the fast-paced world of digital marketing"
              link="/services/digital-marketing"
            ></ServiceCard>
          </motion.div>
        </motion.div>
      </section>
    );
  }
}
