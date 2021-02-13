import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Devices from '../screens/Devices';
import Details from '../screens/Details';

const Stack = createStackNavigator();
export default DevicesStack = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: 'teal', height: 60},
        headerTintColor: '#fff',
      }}>
      <Stack.Screen
        name="Devices"
        component={Devices}
        options={({route}) => ({title: 'Network Devices'})}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={({route}) => ({title: route.params.title})}
      />
    </Stack.Navigator>
  );
};
