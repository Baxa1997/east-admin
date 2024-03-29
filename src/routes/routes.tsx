import {Route, Routes} from "react-router-dom";

import IdScanner from "../UI/IDScanner/IdScanner";
import CameraVerify from "../UI/CameraVerify/CameraVerify";
import PersonalInfo from "../UI/PersonalInfo/PersonalInfo";
import Address from "../UI/Address/Address";
import Packages from "../UI/Packages/Packages";
import CheckingInfo from "../UI/CheckingInfo/CheckingInfo";
import Acceptance from "../UI/Acceptance";
import Signature from "../UI/Signature";
import PapperSign from "../UI/PaperSign";
import ServiceRating from "../UI/ServiceRating";
import Language from "../UI/Language/Language";

function Routing({onSubmit}: {onSubmit: () => void}) {
  return (
    <Routes>
      <Route index element={<Language />} />
      <Route path="/id-scanner" element={<IdScanner />} />
      <Route path="/camera-verification" element={<CameraVerify />} />
      <Route path="/personal-info" element={<PersonalInfo />} />
      <Route path="/address" element={<Address />} />
      <Route path="/rates" element={<Packages />} />
      <Route path="/checking-info" element={<CheckingInfo />} />
      <Route path="/acceptance-info" element={<Acceptance />} />
      <Route path="/signature" element={<Signature />} />
      <Route path="/paper-sign" element={<PapperSign />} />
      <Route
        path="/service-rate"
        element={<ServiceRating onSubmit={onSubmit} />}
      />
    </Routes>
  );
}

export default Routing;
