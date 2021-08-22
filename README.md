# React-Native-Web app

## Setting up

### Setup web app

```bash
$ npx create-react-app web --template typescript --use-npm
$ cd web # go into the app if needed
$ npm i react-native react-native-web react-art
$ npm i -D @types/react-native
```

-   Delete App.css, App.test.tsx, index.css, logo.svg
-   Delete `import './index.css';` from index.tsx
-   Paste the code below into index.tsx

```js
import { AppRegistry } from "react-native";
AppRegistry.registerComponent("App", () => App);
AppRegistry.runApplication("App", {
	initialProps: {},
	rootTag: document.getElementById("root"),
});
```

### Setup react native app

```bash
$ npx react-native init mobile --template react-native-template-typescript
$ cd mobile
# Reinstall packages with npm (if windows is slow like me)
$ sudo rimraf node_modules && yarn.lock # or manually delete node_modules if rimraf isn't installed
$ npm install
# Open up Command Prompt terminal
$ cd mobile
$ npm run android
```

## Creating a monorepo with Workspaces

-   Move `mobile` and `web` folder into a new `packages` folder
    `$ npm init -y` in the main folder
-   Add to package.json for saving purposes

```js
{
    // add private: true
    "private": true,
    "scripts": {
        // ...
        "git": "git add . && git commit -m",
        "postgit": "git push --all"
    },
    // add workspaces
    "workspaces": [
        "packages/*"
    ]
}
```

-   Remove node modules in subpackages

```bash
$ rm -rf packages/*/node_modules/ # or just delete node_modules inside mobile and web
$ npm install # in the root path
$ cd packages && mkdir common && cd common && npm init -y
# Change name of `package/common/package.json` to `@app/common`
$ mkdir src && cd src && touch index.tsx
# Copy `mobile/App.tsx` into `index.tsx`
$ cd .. # into common folder
$ npm i react-native react rimraf
$ npm i -D typescript @types/react-native
$ touch tsconfig.json
# copy web tsconfig.json to common tsconfig.json
# delete allowJs, change isolatedModules: true to declaration: true, delete noEmit, add outDir: dist
# 		"declaration": true,
#		"jsx": "react"
#       "include": ["src"]
```

-   Add to `common/package.json`

```js
    "main": "dist/index.js", // change to dist/index.js
	"scripts": {
		"build": "rimraf dist && tsc -p tsconfig.json"
	},
```
```bash
$ npm run build
```
### Use common component in web
```bash
# Add "@app/common": "file:../common", to package.json > "dependencies": {} in web
$ npm link # inside common folder to initiate a link
$ cd ../web/
$ npm link @app/common # create symlink @app/common package
$ cd .. && npm install # install in root folder
# check link works with ls node_modules/@app
# add this to root package.json to list all symlinks
	# "scripts": {
    #     "symlinks": "npm ls -g --depth=0 --link=true"
	# },
# add "type": "module" to all package.json and change tsconfig.json in common and web to "module": "esnext",

```

** All packages must be installed at root level using `npm i <package_name> -w @app/<workspace_name>`

- Add a .gitignore file in the root
```py
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
./**/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# Ignore built ts files
dist/**/*

# ignore yarn.lock
yarn.lock
package-lock.json

# API keys and secrets
.env

# Dependency directory
node_modules
bower_components

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*

lib-cov
*.seed
*.log
*.csv
*.dat
*.out
*.pid
*.gz
*.swp

pids
logs
results
tmp

```

## Shortcuts

`tsrafce` - typescript react arrow functional component export \
`rnss` - react-native stylesheets \
`rh` - react-hook \

## Resources

[Tutorial Link](https://www.youtube.com/watch?v=J0b11tvEkFQ&list=PLN3n1USn4xll9wq0rw0ECrO0j2PFzuXtn) \
[React native web using expo](https://codersera.com/blog/running-react-native-web-using-expo-in-2020/) \
[React native web navigation](https://codersera.com/blog/how-to-do-navigation-in-react-native-web-in-2020/)
[React native typescript template](https://github.com/react-native-community/react-native-template-typescript) \
