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
            title="Empowering your business with automated solutions"
            image={introImg}
          >
            <p>
              BrainHR IT Solutions Inc. (BITS) is a leading software consultancy
              firm catering to the IT consulting needs and delivering end-to-end
              solutions to software development projects for various prestigious
              companies and our esteemed clients in the USA and India.
            </p>
            <p>
              We offer best-in-class technology solutions as well as digital
              marketing solutions with our in-house developed automation tools
              for each scenario measured and driven through our data engineering
              and analytics.
            </p>
            <p>
              BITS services add value, quality, speed & invent cost-effective
              strategies in our all business models. We are robust, adaptive,
              flexible, innovative in implementing and executing our day-to-day
              activities and projects with our CCCC (Core Client-Customer
              Centric) engagement model.
            </p>
            <p>
              <Link to="/about/who-we-are" className="btn-full">
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
            // animationVariant={AppAnimations.slideToRight}
          ></Card>
          <Card
            icon="fa-regular fa-object-ungroup"
            title="Flexible Solutions"
            description="We offer innovative, flexible & customer-focused business solutions. 
            We work closely with our clients to understand their unique goals and deliver services 
            that drive maximum value."
            // animationVariant={AppAnimations.slideToTop}
          ></Card>
          <Card
            icon="fa-regular fa-snowflake"
            title="Tailored to your needs"
            description="Our IT consulting & staffing solutions are designed to perfection after 
            deep analysis & collaboration. We offer customized solutions to cater to our client's 
            business goals and diverse interests."
            // animationVariant={AppAnimations.slideToLeft}
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
