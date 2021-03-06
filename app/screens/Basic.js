import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from 'react-native';
import {globalStyles} from '../styles/global';
import Card from '../shared/Card';
import data from '../assets/helos-basic.json';

export default Basic = ({navigation}) => {
  const [commandsInfo, setCommandsInfo] = useState(data);
  return (
    <View style={globalStyles.container}>
      <StatusBar backgroundColor="teal" />
      <FlatList
        data={commandsInfo.sort((a, b) => a.title.localeCompare(b.title))}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Details', item)}>
            <Card>
              <Text style={globalStyles.titleText}> {item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
