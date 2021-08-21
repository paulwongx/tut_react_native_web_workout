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
- Remove node modules in subpackages
```bash
$ rm -rf packages/*/node_modules/ # or just delete node_modules inside mobile and web
$ npm install # in the root path
$ cd packages && mkdir common && cd common && npm init -y
# Change name of `package/common/package.json` to `@app/common`
$ mkdir src && cd src && touch index.tsx
# Copy `mobile/App.tsx` into `index.tsx`
$ cd .. # into common folder
$ npm i react-native react
$ npm i -D typescript @types/react-native
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
