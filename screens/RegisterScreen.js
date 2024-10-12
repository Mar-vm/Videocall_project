// RegisterScreen.js
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [telefono, setTelefono] = useState(''); // Estado para el número de teléfono

  const handleRegister = () => {
    // Lógica para manejar el registro
    console.log('Registro exitoso:', { nombre, correo, contrasena, telefono });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrarse</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        value={correo}
        onChangeText={setCorreo}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={contrasena}
        onChangeText={setContrasena}
      />
      <TextInput
        style={styles.input}
        placeholder="Número de Teléfono" // Placeholder para el número de teléfono
        value={telefono}
        onChangeText={setTelefono}
        keyboardType="phone-pad" // Tipo de teclado para el número de teléfono
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
      <Text style={styles.footerText}>
        ¿Ya tienes cuenta?{' '}
        <Text 
          style={styles.linkText} 
          onPress={() => navigation.navigate('Login')} // Navegar a la pantalla de inicio de sesión
        >
          Inicia sesión.
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#007BFF',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#0056B3',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  footerText: {
    fontSize: 16,
    marginTop: 20,
    color: '#333',
  },
  linkText: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
});

export default RegisterScreen;
