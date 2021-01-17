import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "./styles.css";

export default function App() {
  useEffect(() => {
    // Your code here
    console.log("here in componentDidMount");
    console.log(window.GGBApplet.name);
    var params = {
      appName: "graphing",
      width: 800,
      height: 600,
      showToolBar: true,
      showAlgebraInput: true,
      showMenuBar: true,
      material_id: "RHYH3UQ8"
    };
    var ggbApplet = new window.GGBApplet(params, true);
    ggbApplet.setHTML5Codebase("https://www.geogebra.org/apps/5.0.498.0/web3d");
    ggbApplet.inject("ggb-element");
    // window.addEventListener("load", function () {
    //   ggbApplet.inject("ggb-element");
    // });
    debugger;
  }, []);
  return (
    <>
      <div className="App">Hello</div>
      <Helmet>
        <script src="https://www.geogebra.org/apps/deployggb.js" />
      </Helmet>
      <div id="ggb-element"></div>
    </>
  );
}
