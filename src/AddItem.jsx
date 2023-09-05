import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';

export default function AddItem({ text, setText, addItem }) {
  return (
    <View style={styles.buttonContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Escriba aquí...'
          style={styles.input}
          value={text}
          onChangeText={setText}
        />
      </View>
      <Pressable style={styles.button} onPress={addItem}>
        <Ionicons name='add-circle-outline' size={35} color={'black'} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 5,
    fontSize: 18,
    width: 180,
  },
  inputContainer: {
    marginTop: 20,
    borderColor: '#000000',
    borderWidth: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 15,
  },
  button: {
    marginTop: 15,
    marginLeft: 15,
  },
});
