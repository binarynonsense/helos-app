import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {globalStyles} from '../styles/global';
import Card from '../shared/Card';
import data from '../assets/helos-devices.json';

export default Devices = ({navigation}) => {
  const [commandsInfo, setCommandsInfo] = useState(data);
  
  return (
    <View style={globalStyles.container}>
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
