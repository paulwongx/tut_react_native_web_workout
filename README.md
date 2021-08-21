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
-   Paste the below into index.tsx

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
$ npx react-native run-android
```

## Shortcuts
`tsrafce` - typescript react arrow functional component export
`rnss` - react-native stylesheets
`rh` - react-hook

## Resources

[Tutorial Link](https://www.youtube.com/watch?v=J0b11tvEkFQ&list=PLN3n1USn4xll9wq0rw0ECrO0j2PFzuXtn) \
[React native web using expo](https://codersera.com/blog/running-react-native-web-using-expo-in-2020/) \
[React native web navigation](https://codersera.com/blog/how-to-do-navigation-in-react-native-web-in-2020/)
[React native typescript template](https://github.com/react-native-community/react-native-template-typescript) \