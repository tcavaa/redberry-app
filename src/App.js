import React from "react";
import './components/stylesheets/app.css';
import { Outlet, NavLink } from "react-router-dom";


const App = () => {
  // To do List

  return (
    <div className="app">
      <div className="redberryText"></div>
      <div className="homeImage"></div>
      <div className="buttonsCont">
        <NavLink className="buttons" to="/adddata">ᲩᲐᲜᲐᲬᲔᲠᲘᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ</NavLink>
        <NavLink className="buttons" to="/list">ᲩᲐᲜᲐᲬᲔᲠᲔᲑᲘᲡ ᲡᲘᲐ</NavLink>
      </div>
    </div>
  );
};

export default App;
