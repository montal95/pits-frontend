import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import Plants from "./pages/Plants";
import PlantShow from "./pages/PlantShow";
import PlantEdit from "./pages/PlantEdit";
import PlantNew from "./pages/PlantNew";
import About from "./pages/About";
import Support from "./pages/Support";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/plants" component={Plants} />
          <Route exact path="/plants/:id" component={PlantShow} />
          <Route exact path="/plants/edit/:id" component={PlantEdit} />
          <Route exact path="/plants/new" component={PlantNew} />
          <Route exact path="/about" component={About} />
          <Route exact path="/support" component={Support} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
