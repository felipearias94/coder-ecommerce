import {
  ActivityIndicator,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useState } from 'react';
import Header from '../components/shared/Header';
import { colors } from '../theme/colors';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { clearUser } from '../redux/slices/authSlice';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import {
  useGetImagesQuery,
  usePutImagesMutation,
} from '../services/ecommerceApi';

const Profile = () => {
  const defaulImage = 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png';
  const dispatch = useDispatch();
  const [location, setLocation] = useState(null);
  const [putImage, result] = usePutImagesMutation();
  const { data, isLoading, refetch } = useGetImagesQuery();

  const onOpenCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (!permissionResult.granted) {
      alert('No se han dado accesos para acceder!');
      return;
    }
    const result = await ImagePicker.launchCameraAsync({
      base64: true,
    });

    if (!result.canceled) {
      await putImage({
        image: `data:image/jpeg;base64,${result.assets[0].base64}`,
      });
      refetch();
    }
  };

  const onOpenGalery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
      base64: true,
    });

    if (!result.canceled) {
      await putImage({
        image: `data:image/jpeg;base64,${result.assets[0].base64}`,
      });
      refetch();
    }
  };

  const onOpenLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (!status.granted) {
      alert('Permisos de ubicación denegado!');
      return;
    }

    const location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  };

  const onHandleLogOut = () => {
    dispatch(clearUser());
  };

  return (
    <>
      <Header title='Perfil' />
      <View style={styles.wrapper}>
        {isLoading ? (
          <ActivityIndicator size={'large'} />
        ) : (
          <Image
            style={styles.image}
            source={{
              uri: data ? data.image : defaulImage,
            }}
          />
        )}

        <Pressable style={styles.button} onPress={onOpenCamera}>
          <AntDesign name='camerao' size={24} color='black' />
          <Text style={{ fontFamily: 'Bold', fontSize: 18 }}>Abrir Cámara</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={onOpenGalery}>
          <FontAwesome name='photo' size={24} color='black' />
          <Text style={{ fontFamily: 'Bold', fontSize: 18 }}>
            Abrir Galería
          </Text>
        </Pressable>
        <Pressable style={styles.button} onPress={onOpenLocation}>
          <Feather name='map-pin' size={24} color='black' />
          <Text style={{ fontFamily: 'Bold', fontSize: 18 }}>Abrir Mapas</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={onHandleLogOut}>
          <Feather name='user-x' size={24} color='black' />
          <Text style={{ fontFamily: 'Bold', fontSize: 18 }}>
            Cerrar sesión
          </Text>
        </Pressable>
      </View>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  wrapper: { alignItems: 'center', paddingTop: 30 },
  image: { width: 150, height: 150, borderRadius: 100 },
  button: {
    flexDirection: 'row',
    gap: 8,
    width: '40%',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.black,
    backgroundColor: colors.lightBeige,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 13,
    marginTop: 20,
  },
});
