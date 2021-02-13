import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  StatusBar,
} from 'react-native';
import {globalStyles} from '../styles/global';
// import { MaterialIcons } from '@expo/vector-icons';
import Card from '../shared/Card';

import data from '../assets/helos-basic.json';

export default Basic = ({navigation}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState(data);
  // const [reviews, setReviews] = useState([
  //   {
  //     title: '***',
  //     body: '???',
  //     key: '1',
  //   },
  // ]);

  const pressHandler = () => {
    navigation.navigate('Details');
  };

  return (
    <View style={globalStyles.container}>
      <StatusBar backgroundColor="teal" />
      <Modal visible={modalOpen} animationType="slide">
        <View style={styles.modalContent}>
          {/* <MaterialIcons
            name="close"
            size={24}
            style={{...styles.modalToggle, ...styles.modalClose}}
            onPress={() => setModalOpen(false)}
          /> */}
          <Text>Hello from the modal :)</Text>
        </View>
      </Modal>

      {/* <MaterialIcons
        name="add"
        size={24}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      /> */}

      <FlatList
        data={reviews.sort((a, b) => a.title.localeCompare(b.title))}
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

const styles = StyleSheet.create({
  modalToggle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
});
