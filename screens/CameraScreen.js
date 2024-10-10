import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const CameraScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Aquí estará la cámara en grande.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default CameraScreen;
