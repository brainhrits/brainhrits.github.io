import React from "react";
import { Link } from "react-router-dom";
import companyLogo from "../../../common/images/logo.png";
import "./header.css";
class Header extends React.Component {

  render() {
    return (
      <header>
        <div className="headers-container">
          <div className="sub-header-container">
            <div className="sub-headers-1">
              <div className="sub-headers-2">
                <div className="sub-header">
                  <a
                    href="https://www.linkedin.com/company/brainhr-it-solutions"
                    target="_blank"
                  >
                    <span className="header-icon">
                      <i className="fa-brands fa-linkedin"></i>
                    </span>
                  </a>
                </div>
                <div className="sub-header partition">
                  <a
                    href="https://goo.gl/maps/p4z1JeSebCChziyU9"
                    target="_blank"
                  >
                    <span className="header-icon">
                      <i className="fa fa-solid fa-location-dot"></i>
                    </span>
                  </a>
                  <span>
                    33 Wood Avenue South, Suite 618, Iselin New Jersey 08830
                  </span>
                </div>
              </div>
              <div className="sub-header">
                <a href="#" target="_blank">
                  <span className="header-icon">
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                </a>
                <span>info@brainhritsolutions.com</span>
              </div>
            </div>
          </div>
          <div className="main-headers-container">
            <div className="main-headers-1">
              <div className="company-logo-container">
                <Link to="/">
                  <img
                    className="company-logo"
                    src={companyLogo}
                    alt="Brain HR LOGO"
                  />
                </Link>
              </div>
              <ul className="main-headers">
                {/* <li className="header">
                  <Link to="/">
                    <span className="header-icon">
                      <i className="fa fa-home" aria-hidden="true"></i>
                    </span>
                    <span>Home</span>
                  </Link>
                </li> */}

                <li className="header dropdown">
                  <a href="#">
                  <span className="header-icon">
                    <i className="fa fa-info-circle" aria-hidden="true"></i>
                  </span>
                  <span>About</span>
                  </a>
                  <ul className="dropdown-items">
                    <li className="dropdown-item">
                      <Link to="/about/who-we-are">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-users"></i>
                        </span>
                        <span className="dropdown-item-text">Who We Are</span>
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/about/vision">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-bullseye"></i>
                        </span>
                        <span className="dropdown-item-text">Our Vision</span>
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/about/culture">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-rocket"></i>
                        </span>

                        <span className="dropdown-item-text">
                          Our People & Our Culture
                        </span>
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/about/research">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-lightbulb"></i>
                        </span>

                        <span className="dropdown-item-text">
                          Research & Development
                        </span>
                      </Link>
                    </li>

                    {/* <li className="dropdown-item">
                      <a href="#">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-handshake"></i>
                        </span>
                        <span className="dropdown-item-text">
                          Partnership & Collaboration
                        </span>
                      </a>
                    </li> */}
                    <li className="dropdown-item">
                      <Link to="/about/minorities">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-dove"></i>
                        </span>

                        <span className="dropdown-item-text">
                          Women & Minorities
                        </span>
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/about/csr">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-hand-holding-heart"></i>
                        </span>

                        <span className="dropdown-item-text">
                          Corporate Social Responsibility
                        </span>
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/about/pain-points">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-folder-open"></i>
                        </span>

                        <span className="dropdown-item-text">
                          Addressing Pain Points
                        </span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="header dropdown">
                  <span className="header-icon">
                    <i className="fa-solid fa-bell-concierge"></i>
                  </span>
                  <a href="#servicesSection">
                  <span>Services</span>
                  </a>
                  
                  {/* <ul className="dropdown-items">
                    <li className="dropdown-item dropdown">
                      <Link to="/services/consulting">
                        <span className="dropdown-item-icon">
                          <i className="fas fa-comments"></i>
                        </span>
                        <span className="dropdown-item-text">Consulting</span>
                      </Link>
                      <ul className="dropdown-items right-menu overflow-scroll">
                        {this.getConsultingServicesHeaderComponents()}
                      </ul>
                    </li>
                    <li className="dropdown-item dropdown">
                      <Link to="/services/it">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-laptop-code"></i>
                        </span>
                        <span className="dropdown-item-text">
                          Information Technology
                        </span>
                      </Link>
                      <ul className="dropdown-items right-menu overflow-scroll">
                        {this.getItServicesHeaderComponents()}
                      </ul>
                    </li>

                    <li className="dropdown-item">
                      <Link to="/services/onsite-offshore">
                        <span className="dropdown-item-icon">
                          <i className="fas fa-plane"></i>
                        </span>

                        <span className="dropdown-item-text">
                          Onsite Offshore model
                        </span>
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/services/trainings">
                        <span className="dropdown-item-icon">
                          <i className="fas fa-chalkboard-teacher"></i>
                        </span>

                        <span className="dropdown-item-text">Trainings</span>
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/services/outsourcing">
                        <span className="dropdown-item-icon">
                          <i className="fas fa-briefcase"></i>
                        </span>

                        <span className="dropdown-item-text">Outsourcing</span>
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/services/digital-marketing">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-bullhorn"></i>
                        </span>

                        <span className="dropdown-item-text">
                          Digital Marketing
                        </span>
                      </Link>
                    </li>
                  </ul> */}
                </li>
                {/* <li className="header dropdown">
                  <span className="header-icon">
                    <i className="fa-solid fa-cubes"></i>
                  </span>
                  <span className="dropbtn">Industries</span>
                  <ul className="dropdown-items overflow-scroll">
                    <li className="dropdown-item">
                      <a href="#">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-laptop-code"></i>
                        </span>

                        <span className="dropdown-item-text">
                          Information Technology
                        </span>
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-laptop-code"></i>
                        </span>
                        <span className="dropdown-item-text">
                          Government Projects
                        </span>
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-laptop-code"></i>
                        </span>
                        <span className="dropdown-item-text">
                          National & Federal Projects
                        </span>
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-laptop-code"></i>
                        </span>
                        <span className="dropdown-item-text">
                          International Projects ( MNCs )
                        </span>
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-laptop-code"></i>
                        </span>
                        <span className="dropdown-item-text">
                          Banking & Finance
                        </span>
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-laptop-code"></i>
                        </span>
                        <span className="dropdown-item-text">
                          Healthcare & Life Sciences
                        </span>
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-laptop-code"></i>
                        </span>
                        <span className="dropdown-item-text">
                          Telecommunication Projects
                        </span>
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-laptop-code"></i>
                        </span>
                        <span className="dropdown-item-text">
                          Cyber Security Projects
                        </span>
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-laptop-code"></i>
                        </span>
                        <span className="dropdown-item-text">
                          Defense Projects
                        </span>
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-laptop-code"></i>
                        </span>
                        <span className="dropdown-item-text">
                          Automotive Projects
                        </span>
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-laptop-code"></i>
                        </span>
                        <span className="dropdown-item-text">
                          Large- & Small-Scale Industrial Projects
                        </span>
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-laptop-code"></i>
                        </span>
                        <span className="dropdown-item-text">
                          Insurance and Tax Projects
                        </span>
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-laptop-code"></i>
                        </span>
                        <span className="dropdown-item-text">
                          Infrastructure & Construction Projects
                        </span>
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-laptop-code"></i>
                        </span>
                        <span className="dropdown-item-text">Gaming</span>
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-laptop-code"></i>
                        </span>
                        <span className="dropdown-item-text">
                          AR & VR Augmentation
                        </span>
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-laptop-code"></i>
                        </span>
                        <span className="dropdown-item-text">
                          AI & Robotics
                        </span>
                      </a>
                    </li>
                  </ul>
                </li> */}
                <li className="header dropdown">
                <a href="#">
                  <span className="header-icon">
                    <i className="fa-solid fa-briefcase"></i>
                  </span>
                  <span>Careers</span>
                  </a>
                  <ul className="dropdown-items">
                    <li className="dropdown-item">
                      <a href="#">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-folder-open"></i>
                        </span>

                        <span className="dropdown-item-text">
                          Internal Positions
                        </span>
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-folder-tree"></i>
                        </span>

                        <span className="dropdown-item-text">
                          Client Positions{" "}
                        </span>
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-book-open-reader"></i>
                        </span>
                        <span className="dropdown-item-text">Internships </span>
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-graduation-cap"></i>
                        </span>

                        <span className="dropdown-item-text">Trainings</span>
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-retweet"></i>
                        </span>

                        <span className="dropdown-item-text">
                          Referral Program{" "}
                        </span>
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-globe"></i>
                        </span>

                        <span className="dropdown-item-text">
                          Global Opportunities
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="header">
                  <a href="#clients">
                  <span className="header-icon">
                    <i className="fa-solid fa-users"></i>
                  </span>
                  <span>Clients</span>
                  </a>
                </li>
                <li className="header">
                  <a href="#toggleFooter">
                  <span className="header-icon">
                    <i className="fa-solid fa-briefcase"></i>
                  </span>
                  <span>Contact Us</span>
                  </a>
                </li>
              </ul>
            </div>
            {/* <div className="main-headers-2">
              <a href="#" className="btn">
                <i className="fa-regular fa-calendar-days"></i> Schedule a
                Meeting
              </a>
            </div> */}
          </div>
        </div>
      </header>
    );
  }
  getConsultingServicesHeaderComponents() {
    return this.getConsultingServices().map((service) =>
      this.getHeaderComponent(service)
    );
  }
  getItServicesHeaderComponents() {
    return this.getItServices().map((service) =>
      this.getHeaderComponent(service)
    );
  }
  getHeaderComponent(service) {
    return (
      <li className="dropdown-item">
        <Link to={service.link}>
          <span className="dropdown-item-icon">
            <i className={service.icon}></i>
          </span>
          <span className="dropdown-item-text">{service.name}</span>
        </Link>
      </li>
    );
  }

  getConsultingServices() {
    return [
      {
        name: "Staff Augmentation",
        icon: "fas fa-users-cog",
        link: "/services/staff-augmentation",
      },
      {
        name: "HR Strategic Solutions",
        icon: "fas fa-balance-scale",
        link: "/services/hr-solutions",
      },
      {
        name: "Recruitment",
        icon: "fas fa-user-tie",
        link: "/services/recruiting",
      },
    ];
  }
  getItServices() {
    return [
      {
        name: "AWS",
        icon: "fab fa-aws",
        link: "/services/aws",
      },
      {
        name: "PEGA",
        icon: "fas fa-cubes",
        link: "/services/pega",
      },
      {
        name: "Java",
        icon: "fab fa-java",
        link: "/services/java",
      },
      {
        name: "Devops",
        icon: "fas fa-tools",
        link: "/services/devops",
      },
      {
        name: "SAP",
        icon: "fas fa-server",
        link: "/services/sap",
      },
      {
        name: "Quality Assurance",
        icon: "fas fa-clipboard-check",
        link: "/services/qa",
      },
      {
        name: "Web Development",
        icon: "fas fa-code",
        link: "/services/web",
      },
      {
        name: ".Net",
        icon: "fab fa-microsoft",
        link: "/services/dotnet",
      },
      {
        name: "Salesforce",
        icon: "fab fa-salesforce",
        link: "/services/salesforce",
      },
      {
        name: "Cloud Computing",
        icon: "fas fa-cloud-upload-alt",
        link: "/services/cloud",
      },
      {
        name: "Mobile Application Development",
        icon: "fab fa-android",
        link: "/services/mobile",
      },
      {
        name: "Cyber Security",
        icon: "fas fa-lock",
        link: "/services/cyber-security",
      },
      {
        name: "Data Analytics",
        icon: "fas fa-chart-bar",
        link: "/services/analytics",
      },
      {
        name: "Automation & AI",
        icon: "fas fa-robot",
        link: "/services/automation",
      },
      {
        name: "Machine Learning",
        icon: "fas fa-brain",
        link: "/services/ml",
      },
      {
        name: "Robotics & RPA",
        icon: "fas fa-cogs",
        link: "/services/rpa",
      },
      {
        name: "ERP",
        icon: "fas fa-sitemap",
        link: "/services/erp",
      },
      {
        name: "CRM",
        icon: "fas fa-users",
        link: "/services/crm",
      },
      {
        name: "CMS",
        icon: "fas fa-file-alt",
        link: "/services/cms",
      },
      {
        name: "Embedded Systems",
        icon: "fas fa-microchip",
        link: "/services/embedded-systems",
      },
    ];
  }
}

export default Header;
