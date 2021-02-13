import React from 'react';
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
// import {MaterialIcons} from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Header({title, navigation}) {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    // <ImageBackground
    //   source={require('../assets/game_bg.png')}
    //   style={styles.header}>
    <View style={styles.header}>
      {/* <View style={styles.icon}>
        <Icon name="menu" size={28} onPress={openMenu} />
      </View> */}
      <View style={styles.headerTitle}>
        {/* <Image
          source={require('../assets/heart_logo.png')}
          style={styles.headerImage}
        /> */}
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
    // </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#eee',
    letterSpacing: 1,
  },
  icon: {
    position: 'absolute',
    left: 16,
  },
  headerTitle: {
    flexDirection: 'row',
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10,
  },
});
