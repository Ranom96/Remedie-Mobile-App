import * as React from "react";
import { Text, SafeAreaView } from "react-native";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import SplashScreen from "./screens/Splash/SplashScreen";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import react from "react";
import Login from "./screens/Login/Login";

const Tab = createBottomTabNavigator();

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [logado, setLogado] = useState(false);

  const handleLogin = () => {
    setLogado(true);
  };

  useEffect(() => {
    setTimeout(() => setShowSplash(false), 1000);
  }, []);

  return showSplash ? (
    <SplashScreen />
  ) : logado ? (
    <NavBar />
  ) : (
    <Login logar={handleLogin} />
  );

  // return <Login logar={handleLogin} />;
}
