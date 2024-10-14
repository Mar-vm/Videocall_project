// screens/CameraScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';

const CameraScreen = () => {
  return (
    <View style={styles.container}>
      {/* Simulación de la cámara con un cuadro negro */}
      <View style={styles.cameraPlaceholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  cameraPlaceholder: {
    width: '90%',
    height: '90%',
    backgroundColor: 'black',
  },
});

export default CameraScreen;
