import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import {globalStyles} from '../styles/global';

export default Details = ({navigation, route}) => {
  return (
    <View style={globalStyles.container}>
      <ScrollView style={{margin: 30}}>
        <Text
          style={{
            textAlign: 'justify',
            color: '#555',
            fontSize: 16,
            lineHeight: 25,
          }}>
          {route.params?.body ?? ''}
        </Text>
      </ScrollView>
    </View>
  );
};
