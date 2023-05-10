import React from "react";
import { Link } from "react-router-dom";
import companyLogo from "../../../common/images/logo.png";
import "./footer.css";
export default class Footer extends React.Component {
  render() {
    console.log("API URL: ", process.env);
    return (
      <footer class="footer">
        <div class="footerContainer">
          <div class="footerSection footerCompany">
            <div class="footerCompany">
              <img className="companyLogoImg" src={companyLogo}></img>
            </div>
            <div>
              BrainHR IT Solutions is a team of highly skilled consultants and
              creative problem solvers who will help you reach your goals
              instead of just sell you a solution.
            </div>

            <div class="footerLinkedIn">
              <a
                href="https://www.linkedin.com/company/brainhr-it-solutions"
                target="_blank"
              >
                <span>
                  <i className="fa-brands fa-linkedin"></i>
                </span>
              </a>
            </div>
          </div>
          <div class="footerSection">
            <div class="footerSectionHeader">Quick Links</div>
            <ul class="footerLinks">
              <li class="footerLink">
                <Link to="/about/who-we-are">Who We Are</Link>
              </li>
              <li class="footerLink">
                <Link to="/about/vision">Our Vision</Link>
              </li>
              <li class="footerLink">
                <Link to="/about/culture">Our Culture</Link>
              </li>
              <li class="footerLink">
                <Link to="/about/minorities">Women & Minorities</Link>
              </li>
              <li class="footerLink">
                <Link to="/about/research">Research</Link>
              </li>
            </ul>
          </div>
          <div class="footerSection">
            <div class="footerSectionHeader">Useful Links</div>
            <ul class="footerLinks">
              <li class="footerLink">
                <Link to="/services/consulting">Consulting</Link>
              </li>
              <li class="footerLink">
                <Link to="/services/it">Information Technology</Link>
              </li>
              <li class="footerLink">
                <Link to="/services/trainings">Trainings</Link>
              </li>
              <li class="footerLink">
                <Link to="/services/digital-marketing">Digital Marketing</Link>
              </li>
            </ul>
          </div>
          <div class="footerSection footerContactUs">
            <div class="footerSectionHeader">Contact</div>
            <ul class="footerLinks">
              <li>
                <div>
                  <span className="header-icon">
                    <i className="fa fa-solid fa-location-dot"></i>
                  </span>
                  33 Wood Avenue South, Suite 618, Iselin NJ-08830, USA
                </div>
              </li>
              <li>
                <a href="#" target="_blank">
                  <span className="header-icon">
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                </a>
                <span>info@brainhritsolutions.com</span>
              </li>
              <li>
                <div>
                  <span className="header-icon">
                    <i className="fa-solid fa-phone"></i>
                  </span>
                  <span>+1201-203-5406</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="copyright">
          <span>
            © 2023 BrainHR IT Solutions Incorporation. All rights reserved.
          </span>
        </div>
      </footer>
    );
  }
}
