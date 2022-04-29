import { Route, BrowserRouter as Router } from "react-router-dom";
import Landing from "./vistas/landing.jsx";
import Home from "./vistas/home.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
      </div>
    </Router>
  );
}

export default App;
