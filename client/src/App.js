import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Landing from "./vistas/landing.jsx";
import Home from "./vistas/home.jsx";
import RecipeDetail from "./vistas/RecipeDetail.jsx";
import CreateRecipe from "./vistas/CreateRecipe.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/create_recipe" component={CreateRecipe} />
        <Route exact path="/details/:id" component={RecipeDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
