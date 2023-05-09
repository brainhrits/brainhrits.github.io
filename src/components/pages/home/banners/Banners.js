import React from "react";
import { Link } from "react-router-dom";
import "./banners.css";

import banner1 from "./images/1.jpg";
import banner2 from "./images/2.png";
import banner3 from "./images/3.jpg";
import banner4 from "./images/5.jpg";
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
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#home-page-banners"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#home-page-banners"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#home-page-banners"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#home-page-banners"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">{this.getBannersComponents()}</div>
      </div>
    );
  }
  getBanners() {
    const banners = [
      {
        headLine: "An Innovative",
        title: "Digital Enterprise",
        description:
          "We develop custom solutions for you no matter your industry or need",
        link: "#",
        image: banner1,
      },
      {
        headLine: "Your Next Business Advantage",
        title: "Digital Transformation",
        description: "Delivering Value through Cybernated Implementations",
        link: "#",
        image: banner2,
      },
      {
        headLine: "Optimizing System Governance with Big Data",
        title: "Data Engineering",
        description: "Delivering Value through Cybernated Implementations",
        link: "#",
        image: banner3,
      },
      {
        headLine: "Optimizing System Governance with Big Data",
        title: "Data Engineering",
        description: "Delivering Value through Cybernated Implementations",
        link: "#",
        image: banner4,
      },
    ];
    return banners;
  }
  getBannersComponents() {
    return this.getBanners().map((banner, index) => (
      <div className="carousel-item active">
        <img src={banner.image} alt={banner.title} />
        <div className="carousel-caption">
          <p className="banner-headline from-top animation-delay-8">
            {banner.headLine}
          </p>
          <p className="banner-title from-top animation-delay-6">
            {banner.title}
          </p>
          <p className="banner-description from-top animation-delay-2">
            {banner.description}
          </p>
          <Link to={banner.link} className="btn-full">
            Learn More
          </Link>
        </div>
      </div>
    ));
  }
}
export default Banners;
