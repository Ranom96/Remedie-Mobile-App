import * as React from "react";
import "react-native-gesture-handler";
import { Text, SafeAreaView } from "react-native";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import SplashScreen from "./screens/Splash/SplashScreen";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import react from "react";
import Login from "./screens/Login/Login";
import RegisterUser from "./screens/RegisterUser/RegisterUser";
import { NavigationContainer } from "@react-navigation/native";

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

  return (
    <NavigationContainer>
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
