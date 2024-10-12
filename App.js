import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CameraScreen from './screens/CameraScreen'; // Asegúrate de que esta ruta sea correcta
import LoginScreen from './screens/LoginScreen'; // Nueva pantalla de inicio de sesión
import RegisterScreen from './screens/RegisterScreen'; // Nueva pantalla de registro

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Camera" component={CameraScreen} options={{ title: 'Cámara' }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Iniciar Sesión' }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Registrarse' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  const iniciarCamara = () => {
    navigation.navigate('Camera'); // Navega a la pantalla de la cámara
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/LogoLSM.png')} style={styles.logo} />
        <Text style={styles.headerText}>Traductor de LSM en tiempo real en videollamada</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.welcome}>¡Bienvenido a la aplicación de VideoCall!</Text>
        <Text style={styles.instructions}>Próximamente podrás iniciar videollamadas aquí</Text>
        
        <TouchableOpacity style={styles.button} onPress={iniciarCamara}>
          <Text style={styles.buttonText}>Iniciar cámara</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.linkText}>Iniciar sesión</Text>
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
    width: '80%',
  },
  welcome: {
    fontSize: 20,
    marginBottom: 20,
  },
  instructions: {
    fontSize: 16,
    marginBottom: 20,
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

export default App;
