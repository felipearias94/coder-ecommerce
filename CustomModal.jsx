import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function CustomModal({
  visible = false,
  setModalVisible,
  text,
  action,
  actionText = 'Aceptar',
  closeText = 'Cancelar',
}) {
  return (
    <Modal
      transparent={true}
      visible={visible}
      onRequestClose={() => setModalVisible(!visible)}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{text}</Text>
          <Pressable
            onPress={action}
            style={[styles.button, styles.buttonClose]}
          >
            <Text>{actionText}</Text>
          </Pressable>
          <Pressable
            onPress={() => setModalVisible(false)}
            style={[styles.button, styles.buttonClose]}
          >
            <Text> {closeText} </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
});
