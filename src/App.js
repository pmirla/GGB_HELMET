import React, { useEffect, useState } from "react";
import GeogebraComponent from "./components/GeogebraComponent";
import useFetchData from "./components/UseFetchData";

import "./styles.css";

export default function App() {
  const [count, setCount] = React.useState(0);

  const [{ data, isLoading, isError }, setFetchUrl] = useFetchData({
    initialFetchUrl:
      "https://cors-anywhere.herokuapp.com/https://storage.googleapis.com/fin-math-images/v_012_direction_and_length_3d_Version2.json"
  });

  let newParameters = {};
  let newParameters2 = {};
  if (!isLoading)
    if (typeof data.res !== "undefined") {
      newParameters = {
        material_id: "ee5nfsq6",
        width: 1314,
        height: 806,
        borderColor: "#FFFFFF",
        enableShiftDragZoom: false
        // ggbBase64: data.res
      };

      newParameters2 = {
        // material_id: "",
        width: 1700,
        height: 806,
        borderColor: "#FFFFFF",
        enableShiftDragZoom: false,
        ggbBase64: data.res
      };
    }

  return (
    <>
      <div className="App">Hello</div>

      <GeogebraComponent
        count={0}
        id="app_id1"
        newParameters={newParameters2}
      />
      {/* <GeogebraComponent count={1} app_id={"app_id2"} newParams={newParams} /> */}
    </>
  );
}
