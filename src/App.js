import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Footer from "./components/Footer";
import ComingSoon from "./containers/ComingSoon";
import Login from "./containers/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/comingsoon" component={ComingSoon} exact />
          <Route path="/" component={Login} exact />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;