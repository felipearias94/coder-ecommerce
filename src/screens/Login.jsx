import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { colors } from '../theme/colors';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const [credentials, setCredentials] = useState({
    email: null,
    password: null,
  });

  const login = () => {
    console.log(credentials);
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.mainTitle}>Bienvenidos</Text>
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
        <Pressable onPress={login} style={styles.button}>
          <Text style={styles.buttonText}>Iniciar sesión</Text>
        </Pressable>
        <Text>
          No tenes cuenta?
          <Pressable onPress={() => navigation.navigate('register')}>
            <Text>Registrate!</Text>
          </Pressable>
        </Text>
      </View>
    </View>
  );
};

export default Login;

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
