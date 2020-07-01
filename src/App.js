import { React, BrowserRouter as Router, Switch, Route } from "libraries";
import { appRoutes } from "routes";
import Navbar from "./components/atoms/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        {appRoutes.map((route, i) => (
          <Route {...route} key={i} />
        ))}
      </Switch>
    </Router>
  );
};

export default App;
