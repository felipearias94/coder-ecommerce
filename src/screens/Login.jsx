import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { colors } from '../theme/colors';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../firebase/firebase_auth';
import { useDispatch } from 'react-redux';
import { setIdToken, setUser } from '../redux/slices/authSlice';

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    email: null,
    password: null,
  });

  const login = async () => {
    try {
      const response = await signInWithEmailAndPassword(
        firebaseAuth,
        credentials.email,
        credentials.password
      );
      dispatch(setUser(response.user.email));
      dispatch(setIdToken(response._tokenResponse.idToken));
    } catch (error) {
      console.log(error);
    }
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

        <View style={{ flexDirection: 'row', gap: 10 }}>
          <Text>No tenes cuenta?</Text>
          <Pressable onPress={() => navigation.navigate('register')}>
            <Text style={{ fontFamily: 'Bold' }}>Registrate!</Text>
          </Pressable>
        </View>
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
