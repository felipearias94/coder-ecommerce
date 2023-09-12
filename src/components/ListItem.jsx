import { Pressable, StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { colors } from '../theme/colors';

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
              name='back'
              size={30}
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
    height: 60,
    backgroundColor: colors.lightBeige,
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 13,
  },
  text: {
    fontSize: 18,
  },
});
