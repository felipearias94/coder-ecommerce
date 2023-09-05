import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AddItem from './src/AddItem';
import ListItem from './src/ListItem';
import CustomModal from './CustomModal';

export default function App() {
  const initialState = [
    { id: 1, name: 'Yerba' },
    { id: 2, name: 'Azucar' },
    { id: 3, name: 'Galletas' },
  ];

  const [newItem, setNewItem] = useState('');
  const [list, setList] = useState(initialState);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const addItem = () => {
    list.push({
      id: Math.random(),
      name: newItem,
    });

    setList(list);
    setNewItem('');
  };

  const removeItem = () => {
    const filteredList = list.filter((item) => item.id !== selectedItemId);
    setList(filteredList);
    setIsModalVisible(false);
  };

  const showRemoveModal = (itemId) => {
    setIsModalVisible(true);
    setSelectedItemId(itemId);
  };

  return (
    <View style={styles.container}>
      <CustomModal
        visible={isModalVisible}
        text={'¿Estas seguro que deseas eliminar la lista?'}
        setModalVisible={setIsModalVisible}
        action={removeItem}
        actionText={'Si'}
        closeText={'No'}
      />
      <Text style={styles.mainTitle}> Lista de compras </Text>
      <AddItem text={newItem} setText={setNewItem} addItem={addItem} />
      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem item={item} removeItem={showRemoveModal} />
        )}
      />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20%',
  },
  mainTitle: {
    marginTop: 20,
    fontSize: 30,
    borderBottomColor: 'red',
    borderBottomWidth: 5,
  },
});
