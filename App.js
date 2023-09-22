import * as React from "react";
import "react-native-gesture-handler";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import SplashScreen from "./screens/Splash/SplashScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "./screens/Login/Login";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";

const Tab = createBottomTabNavigator();

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [logado, setLogado] = useState(true);

  const handleLogin = () => {
    setLogado(true);
  };

  useEffect(() => {
    setTimeout(() => setShowSplash(false), 1000);
  }, []);

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#007AFF" barStyle="light-content" />
      {showSplash ? (
        <SplashScreen />
      ) : logado ? (
        <NavBar />
      ) : (
        <Login logar={handleLogin} />
      )}
    </NavigationContainer>
  );
  // return <RegisterUser />;
}
