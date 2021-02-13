import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import {globalStyles} from '../styles/global';
import Card from '../shared/Card';

export default Details = ({navigation, route}) => {
  return (
    <View style={globalStyles.container}>
      <ScrollView style={{margin: 30}}>
        {/* <Text style={styles.titleText}>{route.params?.title ?? ''}</Text> */}
        <Text
          style={{
            textAlign: 'justify',
            color: '#555',
            fontSize: 16,
            lineHeight: 25,
          }}>
          {route.params?.body ?? ''}
        </Text>
        {/* <View style={styles.rating}>
          <Text>GameZone rating: </Text>
          {<Image source={images.ratings[rating]} />}
        </View> */}
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
