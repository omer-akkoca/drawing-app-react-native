import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from "./app.tsx"

AppRegistry.registerComponent(appName, () => App);