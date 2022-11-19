import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import App from "./components/App";

import Feedback from "./components/pages/Feedback";
import About from "./components/pages/About";
import Nav from "./components/pages/Nav";
import NotFound from "./components/pages/NotFound";
import Owner from "./components/pages/Owner";

const All = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="Feedback" element={<Feedback />} />
        <Route path="About" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Owner />
    </Router>
  );
};

export default All;
