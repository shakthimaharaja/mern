import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import NavBar from "./components/navBar.component";
import createHelp from "./components/createHelp.component";
import createUser from "./components/createUser.component";
import deleteHelp from "./components/deleteHelp.component";
import helpList from "./components/helpList.component";
import updateHelp from "./components/updateHelp.component";





function App() {
  return (
    <Router>
      <div className="container">
      <NavBar />
      <br />
      <Routes>
      <Route path="/helpList" exact Component={helpList} />
      <Route path="/update/:id" exact Component={updateHelp} />
      <Route path="/create" exact Component={createHelp} />
      <Route path="/user" exact Component={createUser} />
      </Routes>
    </div>
    </Router>
   
  );
}

export default App;
