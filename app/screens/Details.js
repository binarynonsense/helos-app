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

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    paddingBottom: 15,
  },
});
