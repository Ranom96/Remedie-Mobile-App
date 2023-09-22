import Home from "../screens/Home";
import Remedios from "../screens/Remedios";
import Consultas from "../screens/Consultas";
import Exames from "../screens/Exames";
import Login from "../screens/Login/Login";
import { View, Image, Text } from "react-native";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHouseMedical,
  faNotesMedical,
  faPrescriptionBottleMedical,
  faStethoscope,
} from "@fortawesome/free-solid-svg-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import ConsultasCadastrar from "../screens/ConsultasCadastrar";
import RemediosCadastrar from "../screens/RemediosCadastrar";

const { Navigator, Screen } = createBottomTabNavigator();

export default function NavBar() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "black",
          tabBarStyle: {
            backgroundColor: "#007AFF",
          },
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "#007AFF",
          },
          headerTitleStyle: {
            fontSize: 32,
          },
          headerTitle: (title = "Remedie"),
          headerTitleAlign: "center",
        }}
      >
        <Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ size, color }) => (
              <FontAwesomeIcon
                icon={faHouseMedical}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Screen
          name="Remédios"
          component={Remedios}
          options={{
            tabBarIcon: ({ size, color }) => (
              <FontAwesomeIcon
                icon={faPrescriptionBottleMedical}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Screen
          name="Consultas"
          component={Consultas}
          options={{
            tabBarIcon: ({ size, color }) => (
              <FontAwesomeIcon
                icon={faNotesMedical}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Screen
          name="Exames"
          component={Exames}
          options={{
            tabBarIcon: ({ size, color }) => (
              <FontAwesomeIcon icon={faStethoscope} size={size} color={color} />
            ),
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
