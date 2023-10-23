import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from './Header';
import MapView from 'react-native-maps';

const MapLoc = ({ route }) => {
  const { location } = route.params;

  return (
    <>
      <Header title='Ubicación' />
      <View style={{ alignItems: 'center', paddingHorizontal: 13 }}>
        <MapView
          style={styles.map}
          pointerEvents={true}
          showsBuildings={true}
          showsScale={true}
          showsUserLocation={true}
          region={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          }}
        />
      </View>
    </>
  );
};

export default MapLoc;

const styles = StyleSheet.create({
  map: { width: '100%', height: '80%' },
});
