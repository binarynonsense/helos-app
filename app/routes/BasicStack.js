import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Header from '../shared/Header';
import Basic from '../screens/Basic';
import Details from '../screens/Details';

const Stack = createStackNavigator();
export default BasicStack = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: 'teal', height: 60},
        headerTintColor: '#fff',
      }}>
      <Stack.Screen
        name="Basic"
        component={Basic}
        options={({route}) => ({title: 'Basic Commands'})}
        // options={{
        //   headerTitle: () => (
        //     <Header title="Basic Commands" navigation={navigation} />
        //   ),
        // }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={({route}) => ({title: route.params.title})}
      />
    </Stack.Navigator>
  );
};
