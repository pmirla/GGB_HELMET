import React, { useEffect, useState } from "react";
import GeogebraComponent from "./components/GeogebraComponent";
import "./styles.css";

export default function App() {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <div className="App">Hello</div>
      <GeogebraComponent count={0} />
    </>
  );
}
