import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Footer from "./components/Footer";
import Login from "./containers/Login";
import Dashboard from "./containers/Dashboard";
import Home from "./containers/Home";
import Edit from "./containers/Edit";
import Create from "./containers/Create";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/home" component={Home} exact />
          <Route path="/" component={Login} exact />
          <Route path="/edit/:idUser" component={Edit} exact />
          <Route path="/dashboard" component={Dashboard} exact />
          <Route path="/create" component={Create} exact/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;