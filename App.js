import * as React from "react";
import { Text, SafeAreaView } from "react-native";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import SplashScreen from "./screens/Splash/SplashScreen";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import react from "react";

const Tab = createBottomTabNavigator();

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => setShowSplash(false), 3000);
  }, []);

  return showSplash ? <SplashScreen /> : <NavBar />;
}
