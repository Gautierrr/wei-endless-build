import React from "react";
import { ExternalComponent } from "webpack-external-import";

export default function ComponentWithExternal() {
  return (
    <ExternalComponent
      interleave={__webpack_require__.interleaved("wei-external-component/Title")}
      export="Title"
      children="Hello world!"
    />
  );
}
