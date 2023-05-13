import React from "react";
import Cart from "./Cart";
import Main from "./Main";
import Sidebar from "./Sidebar";
import data from "../data.json";

function App() {
  let products=(JSON.parse(JSON.stringify(data))).products
  return (
    <div className="wrapper flex space-between">
      <Sidebar products={products} />
      <Main products={products} />
      <Cart />
    </div>
  );
}

export default App;
