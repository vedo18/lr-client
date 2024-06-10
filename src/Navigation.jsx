import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // Import MaterialIcons
import Login from './screens/login';
import Home from './screens/home';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const homeName = 'Home';
const loginName = 'Login';

function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            const routeName = route.name;

            if (routeName === homeName) {
              iconName = focused ? 'home' : 'home';
            } else if (routeName === loginName) {
              iconName = focused ? 'login' : 'login';
            }

            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'grey',
          tabBarLabelStyle: {paddingBottom: 10, fontSize: 10},
          tabBarStyle: {padding: 10, height: 70},
        })}>
        <Tab.Screen name={homeName} component={Home} />
        <Tab.Screen name={loginName} component={Login} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
