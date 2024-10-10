import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Campo de código de entrada */}
      <View style={styles.header}>
        <TextInput
          style={styles.input}
          placeholder="Ingresa un código"
          placeholderTextColor="#999"
        />
        <MaterialIcons name="account-circle" size={24} color="#fff" />
      </View>

      {/* Ilustración */}
      <Image
        source={require('../assets/illustration.png')} // Cambia el path según la ubicación de la imagen
        style={styles.image}
      />

      {/* Descripción */}
      <Text style={styles.title}>Selecciona una cuenta para sacarle más provecho al LSM</Text>
      <Text style={styles.subtitle}>
        Agrega tu cuenta para iniciar tus propias llamadas y usar tus contactos. Sin una
        cuenta, solo puedes unirte a reuniones creadas por otras personas.
      </Text>

      {/* Botón de unirse */}
      <TouchableOpacity style={styles.joinButton}>
        <MaterialIcons name="person-add" size={24} color="white" />
        <Text style={styles.buttonText}>Unirse</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  input: {
    flex: 1,
    borderColor: '#444',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    color: '#fff',
    backgroundColor: '#222',
    marginRight: 10,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    color: '#999',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  joinButton: {
    backgroundColor: '#444',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 10,
  },
});
