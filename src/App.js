import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./common/css/styles.css";
import "./common/css/animations.css";

import Home from "./components/pages/home/Home";
import WhoWeAre from "./components/pages/about/WhoWeAre";
import Consulting from "./components/pages/services/Consulting";
import StaffAugmentation from "./components/pages/services/StaffAugmentation";
import HRStrategicSolution from "./components/pages/services/HrStategicSolution";
import OnsiteOffshore from "./components/pages/services/OnsiteOffShore";
import Recruiting from "./components/pages/services/Recruiting";
import Training from "./components/pages/services/Training";
import InformationTechnology from "./components/pages/services/InformationTechnology";
import Outsourcing from "./components/pages/services/Outsourcing";
import DigitalMarketing from "./components/pages/services/DigitalMarketing";
import Aws from "./components/pages/services/it/Aws";
import Pega from "./components/pages/services/it/Pega";
import NotFound from "./components/common/misc/NotFound";
import Java from "./components/pages/services/it/Java";
import DevOps from "./components/pages/services/it/Devops";
import Sap from "./components/pages/services/it/Sap";
import QA from "./components/pages/services/it/QA";
import Web from "./components/pages/services/it/Web";
import Dotnet from "./components/pages/services/it/Dotnet";
import Salesforce from "./components/pages/services/it/Salesforce";
import Cloud from "./components/pages/services/it/Cloud";
import Mobile from "./components/pages/services/it/Mobile";
import CyberSecurity from "./components/pages/services/it/CyberSecurity";
import Analytics from "./components/pages/services/it/Analytics";
import Automation from "./components/pages/services/it/Automation";
import MachineLearning from "./components/pages/services/it/MachineLearning";
import Rpa from "./components/pages/services/it/Rpa";
import Erp from "./components/pages/services/it/Erp";
import Crm from "./components/pages/services/it/Crm";
import Cms from "./components/pages/services/it/Cms";
import EmbeddedSystems from "./components/pages/services/it/EmbeddedSystems";
import Vision from "./components/pages/about/Vision";
import Culture from "./components/pages/about/Culture";
import Research from "./components/pages/about/Research";
import Minorities from "./components/pages/about/Minorities";
import Csr from "./components/pages/about/Csr";
import PainPoints from "./components/pages/about/PainPoints";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/who-we-are" element={<WhoWeAre />} />
          <Route path="/about/vision" element={<Vision />} />
          <Route path="/about/culture" element={<Culture />} />
          <Route path="/about/research" element={<Research />} />
          <Route path="/about/minorities" element={<Minorities />} />
          <Route path="/about/csr" element={<Csr />} />
          <Route path="/about/pain-points" element={<PainPoints />} />
          <Route path="/services/consulting" element={<Consulting />} />
          <Route
            path="/services/staff-augmentation"
            element={<StaffAugmentation />}
          />
          <Route
            path="/services/hr-solutions"
            element={<HRStrategicSolution />}
          />
          <Route path="/services/recruiting" element={<Recruiting />} />
          <Route
            path="/services/onsite-offshore"
            element={<OnsiteOffshore />}
          />
          <Route path="/services/trainings" element={<Training />} />
          <Route path="/services/it" element={<InformationTechnology />} />
          <Route path="/services/outsourcing" element={<Outsourcing />} />
          <Route
            path="/services/digital-marketing"
            element={<DigitalMarketing />}
          />
          <Route path="/services/aws" element={<Aws />} />
          <Route path="/services/pega" element={<Pega />} />
          <Route path="/services/java" element={<Java />} />
          <Route path="/services/devops" element={<DevOps />} />
          <Route path="/services/sap" element={<Sap />} />
          <Route path="/services/qa" element={<QA />} />

          <Route path="/services/web" element={<Web />} />
          <Route path="/services/dotnet" element={<Dotnet />} />
          <Route path="/services/salesforce" element={<Salesforce />} />
          <Route path="/services/cloud" element={<Cloud />} />
          <Route path="/services/mobile" element={<Mobile />} />
          <Route path="/services/cyber-security" element={<CyberSecurity />} />
          <Route path="/services/analytics" element={<Analytics />} />
          <Route path="/services/automation" element={<Automation />} />
          <Route path="/services/ml" element={<MachineLearning />} />
          <Route path="/services/rpa" element={<Rpa />} />
          <Route path="/services/erp" element={<Erp />} />
          <Route path="/services/crm" element={<Crm />} />
          <Route path="/services/cms" element={<Cms />} />
          <Route
            path="/services/embedded-systems"
            element={<EmbeddedSystems />}
          />
          {/* <Route path="/careers" element={<Careers />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
