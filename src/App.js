import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import GeogebraComponent from "./components/GeogebraComponent";
import "./styles.css";

export default function App() {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  React.useEffect(() => {
    const parsedCount = Number(localStorage.getItem("count") || 0);
    setCount(parsedCount);
  }, []);

  return (
    <>
      <div className="App">Hello</div>
      {/* <div id="ggb-element"></div>
      <Helmet>
        <script src="https://www.geogebra.org/apps/deployggb.js" />
      </Helmet> */}
      <GeogebraComponent count={count} />
    </>
  );
}
