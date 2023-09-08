import Home from '../screens/Home';
import Remedios from '../screens/Remedios';
import Consultas from '../screens/Consultas';
import Exames from '../screens/Exames';
import { View, Image, Text } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

const { Navigator, Screen } = createBottomTabNavigator();

// const CustomHeaderTitle = () => (
//   <View style={{ flexDirection: 'row', alignItems: 'center', textAlign:'center' }}>
//     <Image
//       //source={require('../assets/Remedie-2.svg')}
//       style={{  width: 32, height: 32 }}
//     />
//     <Text style={{ fontSize: 24, color: '#ffa300', textAlign:'center' }}>Remedie</Text>
//   </View>
// );


export default function NavBar() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'black',
          tabBarStyle: {
            backgroundColor: '#007AFF',
          },
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#007AFF',
          },
          headerTitleStyle: {
            fontSize: 32,
          },
          headerTitle: title="Remedie" ,
          headerTitleAlign: 'center',
        }}>
        <Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Feather name="home" size={size} color={color} />
            ),
          }}
        />
        <Screen
          name="Remedios"
          component={Remedios}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Feather name="link-2" size={size} color={color} />
            ),
          }}
        />
        <Screen
          name="Consultas"
          component={Consultas}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Feather name="calendar" size={size} color={color} />
            ),
          }}
        />
        <Screen
          name="Exames"
          component={Exames}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Feather name="calendar" size={size} color={color} />
            ),
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
