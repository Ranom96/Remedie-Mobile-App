import * as React from 'react'
import { Text, SafeAreaView } from 'react-native';
import NavBar from './components/NavBar'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavBar/>
  );
}

