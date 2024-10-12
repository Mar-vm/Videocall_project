// App.js
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen'; // Importa la pantalla de inicio de sesión
import ProfileScreen from './screens/ProfileScreen'; // Importa la pantalla de perfil
import RegisterScreen from './screens/RegisterScreen'; // Importa la pantalla de registro
import CameraScreen from './screens/CameraScreen'; // Importa la pantalla de la cámara

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Iniciar Sesión' }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Perfil' }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Registrarse' }} />
        <Stack.Screen name="Camera" component={CameraScreen} options={{ title: 'Cámara' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  const iniciarCamara = () => {
    navigation.navigate('Camera'); // Navega a la pantalla de la cámara
  };

  const irALogin = () => {
    navigation.navigate('Login'); // Navega a la pantalla de inicio de sesión
  };

  const irARegistrar = () => {
    navigation.navigate('Register'); // Navega a la pantalla de registro
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/LogoLSM.png')} style={styles.logo} />
        <Text style={styles.headerText}>Traductor de LSM en videollamada</Text>
        <TouchableOpacity style={styles.profileIcon} onPress={() => navigation.navigate('Profile')}>
          <Image source={require('./assets/Perfil.png')} style={styles.profileImage} />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.welcome}>¡Bienvenido a la aplicación de VideoCall!</Text>
        <Text style={styles.instructions}>Próximamente podrás iniciar videollamadas aquí</Text>
        <TouchableOpacity style={styles.button} onPress={iniciarCamara}>
          <Text style={styles.buttonText}>Iniciar cámara</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={irALogin}>
          <Text style={styles.linkText}>Iniciar Sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={irARegistrar}>
          <Text style={styles.linkText}>Registrarse</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text>© 2024 Traductor de LSM. Todos los derechos reservados a el profe.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    width: '100%',
    height: 120,
    backgroundColor: '#007BFF',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    position: 'absolute',
    top: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 8,
  },
  profileIcon: {
    position: 'absolute',
    right: 15,
    top: 30, // Ajusta este valor para bajar la imagen
  },
  profileImage: {
    width: 40,
    height: 40,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150,
  },
  welcome: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#00796B',
    marginBottom: 20,
  },
  instructions: {
    fontSize: 18,
    color: '#333',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#0056B3',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
  },
  linkText: {
    color: '#007BFF',
    fontSize: 18,
    marginVertical: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    alignItems: 'center',
  },
});

export default App;
