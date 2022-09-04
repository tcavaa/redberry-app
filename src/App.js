import React from "react";
import { Outlet, NavLink } from "react-router-dom";


const App = () => {
  // To do List

  return (
    <div className="app">
      <NavLink to="/adddata">ᲩᲐᲜᲐᲬᲔᲠᲘᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ</NavLink>
      <NavLink to="/list">ᲩᲐᲜᲐᲬᲔᲠᲔᲑᲘᲡ ᲡᲘᲐ</NavLink>
    </div>
  );
};

export default App;
