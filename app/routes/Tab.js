import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome5';

import BasicStack from './BasicStack';
import DevicesStack from './DevicesStack';
import AboutStack from './AboutStack';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Basic') {
              iconName = focused ? 'terminal' : 'terminal';
            } else if (route.name === 'Devices') {
              iconName = focused ? 'server' : 'server';
            } else if (route.name === 'About') {
              iconName = focused ? 'info-circle' : 'info-circle';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'teal',
          inactiveTintColor: 'gray',
          showLabel: false,
        }}>
        <Tab.Screen
          name="Basic"
          component={BasicStack}
          options={{title: 'Basic'}}
        />
        <Tab.Screen
          name="Devices"
          component={DevicesStack}
          options={{title: 'Devices'}}
        />
        <Tab.Screen name="About" component={AboutStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
