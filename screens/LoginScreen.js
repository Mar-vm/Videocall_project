import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const goToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./../assets/LogoLSM.png')} style={styles.logo} />
        <Text style={styles.headerText}>Iniciar Sesión</Text>
      </View>

      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        
        <TouchableOpacity style={styles.button} onPress={goToHome}>
          <Text style={styles.buttonText}>Acceder</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.linkText}>¿No tienes una cuenta? Regístrate aquí</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#007BFF',
    position: 'absolute',
    top: 0,
    paddingTop: 40,
    paddingBottom: 20,
  },
  logo: {
    width: 80,
    height: 80,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    width: '80%', // Limitar el ancho de los elementos
  },
  input: {
    height: 50,
    borderColor: '#007BFF',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 15,
    width: '100%', // Hacer que el campo de entrada ocupe el ancho completo
  },
  button: {
    backgroundColor: '#0056B3',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  linkText: {
    fontSize: 16,
    color: '#212529',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
