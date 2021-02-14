import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import {globalStyles} from '../styles/global';
import Card from '../shared/Card';
import {BorderlessButton} from 'react-native-gesture-handler';

export default function About() {
  return (
    <View style={globalStyles.container}>
      <ScrollView style={{margin: 40}}>
        <Image
          source={require('../assets/HEL_logo.png')}
          style={{
            tintColor: 'teal',
            resizeMode: 'contain',
            height: 100,
            // width: 200,
            opacity: 0.8,
            margin: 20,
            marginBottom: 50,
            alignSelf: 'center',
          }}
          // style={styles.headerImage}
        />
        <Text
          style={{
            textAlign: 'justify',
            color: '#555',
            fontSize: 16,
            lineHeight: 25,
          }}>
          This is a companion app for the game{' '}
          <Text style={{fontWeight: 'bold'}}>High Entropy: Challenges</Text>.
          {'\n'}
          {'\n'}
          <Text>
            Although the game is designed to be self-contained, with all the
            info the player needs available in documents and hints placed around
            the levels, I thought it would be fun to make this app to have an
            extra, quick way to check some of the basic commands that can be
            used in the game's fictional computers' operating system (HEL OS).
            {'\n'}
            {'\n'}NOTE: Some of the commands may not be available by default,
            depending on the version of HEL OS installed in the computer.{'\n'}
            {'\n'}
            Hope you find it useful,{'\n'}
            {'\n'}Álvaro{'\n'}www.binarynonsense.com
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
}
