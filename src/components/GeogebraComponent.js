import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

export default function GeogebraComponent({ count }) {
  useEffect(() => {
    debugger;
    console.log("here in componentDidMount");

    setTimeout(() => {
      // setCurrent(props.current)
      console.log(window.GGBApplet.name);
      var params = {
        width: 750,
        height: 500,
        // showToolBar: true,
        borderColor: "null",
        showMenuBar: false,
        showAlgebraInput: false,
        customToolbar: "0 || 1",
        showResetIcon: true,
        enableLabelDrags: false,
        enableShiftDragZoom: true,
        enableRightClick: false,
        capturingThreshold: null,
        showToolBarHelp: true,
        errorDialogsActive: true,
        useBrowserForJS: false,
        material_id: "P36DgbhH"
      };
      var ggbApplet = new window.GGBApplet(params, true);
      ggbApplet.setHTML5Codebase(
        "https://www.geogebra.org/apps/5.0.498.0/web3d"
      );
      ggbApplet.inject("ggb-element");
    }, 500);
  }, [count]);

  return (
    <>
      <div>Hello</div>
      <Helmet>
        <script src="https://www.geogebra.org/apps/deployggb.js" />
      </Helmet>
      <div id="ggb-element"></div>
    </>
  );
}
