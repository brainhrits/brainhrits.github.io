import React from "react";
import bannerImage from "./commonBanner.jpeg";
import "./commonBanner.css";
class CommonBanner extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section
        className="commonBanner"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="commonBannerOverlay"></div>
        <div className="commonBannerText">{this.props.children}</div>
      </section>
    );
  }
}
export default CommonBanner;
