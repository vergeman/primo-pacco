# Primo Pacco

This is just to deploy a toy-package and understand the process.

## Steps

1. `npm init`
2. write code, add `index.js` with proper export
3. `npm login`
4. `npm publish`

## Usage

`npm init` a separate project (e.g. `primo-pacco-test`) and load the package.

```
# index.js

const PrimoPacco = require("primo-pacco");
const msg = "se mia nonna avesse avuto le ruote sarebbe stata una biciclettae";
const primo = new PrimoPacco(msg);
primo.dire();
```

## Semvar

In order to publish subsequent changes, need to augment verison in `package.json`.
