import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Footer from "./components/Footer";
import ComingSoon from "./containers/ComingSoon";
import Login from "./containers/Login";
import Dashboard from "./containers/Dashboard";
import Home from "./containers/Home";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/home" component={Home} exact />
          <Route path="/" component={Login} exact />
          <Route path="/dashboard" component={Dashboard} exact />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;