// screens/ProfileScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Información de Usuario</Text>
      {/* Aquí puedes mostrar la información personal del usuario */}
      <Text>Nombre: Usuario Ejemplo</Text>
      <Text>Correo: usuario@ejemplo.com</Text>
      {/* Puedes agregar más campos según sea necesario */}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 40, 
  },
});

export default ProfileScreen;
