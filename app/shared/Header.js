import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Header({title, navigation}) {
  return (
    <View style={styles.header}>
      <View style={styles.headerTitle}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
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
