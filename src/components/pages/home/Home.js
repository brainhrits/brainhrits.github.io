import React from "react";
import { Link } from "react-router-dom";
import Header from "../../common/header/Header";
import Banners from "./banners/Banners";
import InfoSection from "../../common/infoSection/InfoSection";
import introImg from "./images/intro-img.jpeg";
import Card from "./card/Card";
import AppAnimations from "../../../common/js/animations";
import "./home.css";
import Leader from "./leader/Leader";
import ServiceCards from "./services/ServiceCards";
import Statistics from "./statistics/Statistics";
import Partners from "./partners/Partners";
import Footer from "../../common/footer/Footer";
class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Banners />
        <div style={{ marginTop: "45rem" }}>
          <InfoSection
            name="BRAINHR IT SOLUTIONS (BITS)"
            title="Delivering World Class Automated Solutions for all your Business needs"
            image={introImg}
          >
            <p>
              BrainHR IT solutions Inc. (BITS) is a Leading Software Consultancy
              firm catering to the IT Consulting needs and delivering End-End
              Solutions to Software Development Projects for Various Prestigious
              Companies and our Esteemed Clients in USA and India.
            </p>
            <p>
              We Offer best-in-class Technology solutions as well as Digital
              Marketing solutions with our In-house developed Automation Tools
              for each Scenario measured and Driven through our Data Engineering
              and Analytics.
            </p>
            <p>
              BITS Services add Value, Quality, Speed & invent Cost effective
              Strategies in our all Business Models.We are Robust, Adaptive,
              Flexible, Innovative in implementing and executing our Day-Day
              activities and Projects with our CCCC (Core Client-Customer
              Centric) Engagement Model.
            </p>
            <p>
              <Link to="/brain/about" className="btn-full">
                Read More
              </Link>
            </p>
          </InfoSection>
        </div>
        <section className="section cards">
          <Card
            icon="fa-regular fa-circle-user"
            title="Trusted by Clients"
            description="We operate on a client-first approach & have a long record of
            satisfied clients who rely on us for their business needs. We always
            go the extra mile to ensure our client's happiness and satisfaction."
            animationVariant={AppAnimations.slideToRight}
          ></Card>
          <Card
            icon="fa-regular fa-object-ungroup"
            title="Flexible Solutions"
            description="We offer innovative, flexible & customer-focused business solutions. 
            We work closely with our clients to understand their unique goals and deliver services 
            that drive maximum value."
            animationVariant={AppAnimations.slideToTop}
          ></Card>
          <Card
            icon="fa-regular fa-snowflake"
            title="Tailored to your needs"
            description="Our IT consulting & staffing solutions are designed to perfection after 
            deep analysis & collaboration. We offer customized solutions to cater to our client's 
            business goals and diverse interests."
            animationVariant={AppAnimations.slideToLeft}
          ></Card>
        </section>
        <Leader />
        <ServiceCards />
        <Statistics />
        <Partners />
        <Footer />
      </>
    );
  }
}
export default Home;
