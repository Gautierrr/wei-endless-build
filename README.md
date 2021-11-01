# wei-endless-build

Endless build with `webpack-external-import` (reproducible repo)

```sh
nvm use
npm install

npm run build
# OR
npm start # (need to kill the node process)
```

```js
// src/main.jsx

import React from "react";
import { render } from "react-dom";
import { Auth } from "aws-amplify"; // comment this line to make the build work
import { corsImport } from "webpack-external-import";
import ComponentWithExternal from "./ComponentWithExternal.jsx";

corsImport(`http://localhost:8081/importManifestExt.js?${Date.now()}`).then(() => {
  render(
    <>
      <h1>wei-endless-build</h1>
      <ComponentWithExternal />
    </>,
    document.getElementById("react")
  );
});
```

---



Related links:
- repository: https://github.com/gautierrollin/wei-external-component
- issue: https://github.com/ScriptedAlchemy/webpack-external-import/issues/129
