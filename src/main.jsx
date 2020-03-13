import React from "react";
import { render } from "react-dom";
import { Auth } from "aws-amplify";
import { corsImport } from "webpack-external-import";
import ComponentWithExternal from "./ComponentWithExternal.jsx";

corsImport(`http://localhost:8081/importManifest.js?${Date.now()}`).then(() => {
  render(
    <>
      <h1>wei-endless-build</h1>
      <ComponentWithExternal />
    </>,
    document.getElementById("react")
  );
});
