import { Route, BrowserRouter as Router } from "react-router-dom";
import Landing from "./vistas/landing.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Landing} />
      </div>
    </Router>
  );
}

export default App;
