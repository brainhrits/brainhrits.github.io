import React from "react";
import { Link } from "react-router-dom";
import "./banners.css";

import whoWeAreImage from "./images/1.jpg";
import staffAugmentationImage from "./images/2.png";
import itSolutionsImage from "./images/3.jpg";
import ccccImage from "./images/5.jpg";
import trainingsImage from "./images/1.jpg";
import digitalMarketingImage from "./images/14.jpg";
import researchImage from "./images/1.jpg";

class Banners extends React.Component {
  render() {
    return (
      <div
        id="home-page-banners"
        className="carousel slide banners-container"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        <div className="banners-container-overlay" />
        <div className="carousel-indicators">{this.getButtons()}</div>
        <div className="carousel-inner">{this.getBannersComponents()}</div>
      </div>
    );
  }
  getBanners() {
    const banners = [
      {
        headLine: "Our Core Values",
        title: "Not only define who we are today",
        description:
          "But also guide us towards where we aspire to be in the future",

        link: "/about/who-we-are",
        image: whoWeAreImage,
      },
      {
        headLine: "Staff Augmentation",
        title: "Offering world-class recruiting solutions",
        description: "Connecting top talent with exceptional opportunities",

        link: "/services/consulting",
        image: staffAugmentationImage,
      },
      {
        headLine: "IT Solutions",
        title: "Best in class Software Products & Solutions",
        description:
          "Web, Mobile or App Development on various Platforms, Frameworks",

        link: "/services/it",
        image: itSolutionsImage,
      },
      {
        headLine: "CCCC Engagement Model",
        title: "We are Uniquely Exclusive and Inclusive",
        description:
          "Original, Robust, Flexible and Innovative Business Engagements",

        link: "/about/who-we-are",
        image: ccccImage,
      },
      {
        headLine: "Training and Certifications",
        title: "Vast network of trainers and industry professionals",

        description:
          "Comprehensive IT training and certifications courses for all technologies",

        link: "/services/trainings",
        image: trainingsImage,
      },
      {
        headLine: "Digital Marketing",
        title:
          "With specialized and robust marketing strategies and social media campaigns",

        description: "To reach your intended customer base in record time",

        link: "/services/digital-marketing",
        image: digitalMarketingImage,
      },
      {
        headLine: "Research & Development",
        title: "Innovation and green solutions are at the core of work culture",

        description: "For building new technologies and frameworks",

        link: "/about/research",
        image: ccccImage,
      },
    ];
    return banners;
  }
  getBannersComponents() {
    return this.getBanners().map((banner, index) => (
      <div className={index == 0 ? "carousel-item active" : "carousel-item"}>
        <img className="banner-image" src={banner.image} alt={banner.title} />
        <div className="carousel-caption">
          <p className="banner-headline from-top animation-delay-8">
            {banner.headLine}
          </p>
          <p className="banner-title from-top animation-delay-8">
            {banner.title}
          </p>

          <p className="banner-description">{banner.description}</p>
          <Link to={banner.link} className="btn-full">
            Learn More
          </Link>
        </div>
      </div>
    ));
  }
  getButtons() {
    return this.getBanners().map((banner, index) => (
      <button
        type="button"
        data-bs-target="#home-page-banners"
        data-bs-slide-to={index}
        className="active"
        aria-current="true"
        aria-label={banner.description}
      ></button>
    ));
  }
}
export default Banners;
