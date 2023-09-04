import { Pressable, StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';

export default function ListItem({ item, removeItem }) {
  return (
    <View style={styles.container}>
      {item.length === 0 ? (
        <Text>No hay items!</Text>
      ) : (
        <>
          <Text style={styles.text}>{item.name}</Text>
          <Pressable>
            <Ionicons
              style={styles.button}
              name='trash'
              size={20}
              onPress={() => removeItem(item.id)}
            />
          </Pressable>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  text: {
    fontSize: 18,
  },
  button: {
    color: 'red',
  },
});
