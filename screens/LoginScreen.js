import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const irARegistrar = () => {
    navigation.navigate('Register'); // Navega a la pantalla de registro
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/LogoLSM.png')} style={styles.logo} />
      <Text style={styles.prompt}>¿No tienes cuenta? Regístrate aquí.</Text>
      <TextInput style={styles.input} placeholder="Correo electrónico" />
      <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry />
      <TouchableOpacity style={styles.button} onPress={() => {/* Lógica de inicio de sesión */}}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={irARegistrar}>
        <Text style={styles.linkText}>¿Eres nuevo? Regístrate</Text>
      </TouchableOpacity>
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
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    marginTop: 40, 
  },
  prompt: {
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    height: 50,
    width: '80%',
    borderColor: '#007BFF',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#0056B3',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
  },
  linkText: {
    color: '#007BFF',
    fontSize: 16,
    marginVertical: 10,
  },
});

export default LoginScreen;
