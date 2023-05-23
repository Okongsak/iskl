import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navs from "./components/Navbar";
import Home from "./pages/Home";
import Announcement from "./pages/Announcements";
import Services from "./pages/Service";
import Benefit from "./pages/Benefits";
import Hospitals from "./pages/Hospital";
import Claim from "./pages/Claims";
import Quickl from "./pages/QuickLink";

function App() {
  return (
    <div className="">
      <Router>
        <div>

          <Navs />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/announcements">
              <Announcement />
            </Route>
            <Route path="/service">
              <Services />
            </Route>
            <Route path="/benefits">
              <Benefit />
            </Route>
            <Route path="/hospital">
              <Hospitals />
            </Route>
            <Route path="/claim">
              <Claim />
            </Route>
            <Route path="/quicklink">
              <Quickl />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
