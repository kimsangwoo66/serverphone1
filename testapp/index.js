/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App'; //최초실행 앱 화면 나옴
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
