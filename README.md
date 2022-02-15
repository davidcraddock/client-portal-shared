
### `npm run build` to create shared library

This will create a zipped package with only the files you need with following pattern:

[package-name]-[package-version].tgz e.g. my-react-components-0.1.0.tgz

You can influence the resulting package of npm pack by modifying attributes in your package.json, e.g. "version", "name", "main", "files" will influence the output.

1. Now you can install your packages locally from another project:

npm i ../path/to/library/my-react-components-0.1.0.tgz
This will add a new dependency to your package.json:

"my-react-components": "file: ../path/to/library/my-react-components-0.1.0.tgz"
2. Based on your rollup setup you can then use your library like any other library:

import { MyComponent } from "my-react-components";
