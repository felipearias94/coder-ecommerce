import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { colors } from '../theme/colors';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
  const navigation = useNavigation();
  const [credentials, setCredentials] = useState({
    email: null,
    password: null,
  });

  const onCreateAccount = () => {
    console.log(credentials);
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.mainTitle}>Crear una cuenta</Text>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder='Correo electrónico'
          style={styles.input}
          value={credentials.email}
          onChangeText={(value) =>
            setCredentials({ ...credentials, email: value })
          }
        />
        <TextInput
          placeholder='Contraseña'
          secureTextEntry
          style={styles.input}
          value={credentials.password}
          onChangeText={(value) =>
            setCredentials({ ...credentials, password: value })
          }
        />
        <Pressable onPress={onCreateAccount} style={styles.button}>
          <Text style={styles.buttonText}>Crear cuenta</Text>
        </Pressable>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Si tengo cuenta. Volver</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: '40%',
    backgroundColor: '#e0e0e0',
  },
  mainTitle: {
    fontSize: 25,
    marginBottom: 25,
  },
  inputGroup: { flex: 1, width: '60%', gap: 30 },
  input: {
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 16,
    height: 52,
    paddingHorizontal: 13,
    backgroundColor: colors.white,
  },
  button: {
    width: '100%',
    marginTop: 20,
    backgroundColor: colors.heavyBlue,
    height: 52,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'ExtraBold',
    fontSize: 15,
  },
});
