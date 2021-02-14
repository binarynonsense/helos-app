import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import About from '../screens/About';

const Stack = createStackNavigator();

export default AboutStack = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: 'teal', height: 60},
        headerTintColor: '#fff',
      }}>
      <Stack.Screen
        name="About"
        component={About}
        options={({route}) => ({title: 'Info'})}
      />
    </Stack.Navigator>
  );
};
