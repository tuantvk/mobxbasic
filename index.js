/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

import TodosScreen from './src/ui/TodosScreen';
import UsersScreen from './src/ui/UsersScreen';

AppRegistry.registerComponent(appName, () => TodosScreen);
