import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

export default function GeogebraComponent(props) {
  //{ count, app_id, newParams }
  useEffect(() => {
    debugger;
    console.log("here in componentDidMount");

    setTimeout(() => {
      // setCurrent(props.current)
      console.log(window.GGBApplet.name);
      var parameters = {
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
        useBrowserForJS: false
        // material_id: "P36DgbhH"
      };

      parameters = { ...parameters, ...props.newParameters };
      var views = {
        is3D: 1,
        AV: 1,
        SV: 0,
        CV: 0,
        EV2: 0,
        CP: 0,
        PC: 0,
        DA: 0,
        FI: 0,
        PV: 0,
        macro: 0
      };

      var ggbApplet = new window.GGBApplet(parameters, true);
      ggbApplet.setHTML5Codebase(
        "https://www.geogebra.org/apps/5.0.498.0/web3d"
      );

      ggbApplet.inject(props.id);
    }, 500);
  }, [props.newParameters, props.id]);

  return (
    <>
      <div>Hello</div>
      <Helmet>
        <script src="https://www.geogebra.org/apps/deployggb.js" />
      </Helmet>
      <div id={props.id}></div>
    </>
  );
}
