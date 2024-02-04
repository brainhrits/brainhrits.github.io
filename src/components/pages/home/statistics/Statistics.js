import React from "react";
import officeBuilding from "./office-building.jpeg";
import "./statistics.css";
import Stat from "./Stat";
export default class Statistics extends React.Component {
  constructor(props) {
    super(props);
    this.duration = 10;
  }
  render() {
    return (
      <section class="statisticsSection">
        <div
          className="statistics"
          style={{ backgroundImage: `url(${officeBuilding})` }}
        >
          <div className="statisticsOverLay">
            <div className="statisticsContainer">
              <Stat
                icon="fa-solid fa-list-check"
                maxCount="500"
                duration={this.duration}
                suffix="+"
                description="Projects delivered"
              ></Stat>

              <Stat
                icon="fa-solid fa-person-walking-arrow-loop-left"
                maxCount="99"
                duration={this.duration}
                suffix="%"
                description="Customer Retention"
              ></Stat>

              <Stat
                icon="fa-solid fa-users-between-lines"
                maxCount="1000"
                duration={this.duration}
                suffix="+"
                description="Strategically staffed resources"
              ></Stat>
              <Stat
                icon="fa-solid fa-user-graduate"
                maxCount="100"
                duration={this.duration}
                suffix="%"
                description="Certified Practitioners"
              ></Stat>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
