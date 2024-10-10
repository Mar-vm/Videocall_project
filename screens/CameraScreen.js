// Screens/camera.js
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { RNCamera } from 'react-native-camera';

const CameraScreen = () => {
  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.camera}
        type={RNCamera.Constants.Type.back} // Tipo de cámara (frontal o trasera)
        flashMode={RNCamera.Constants.FlashMode.on} // O puedes cambiar a 'off' o 'auto'
      >
        <View style={styles.overlay}>
          <Text style={styles.text}>Cámara Activa</Text>
        </View>
      </RNCamera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
  },
});

export default CameraScreen;
