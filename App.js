import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CameraScreen from './screens/CameraScreen'; // Asegúrate de que esta ruta sea correcta
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Camera" component={CameraScreen} options={{ title: 'Cámara' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  const iniciarCamara = () => {
    navigation.navigate('Camera'); // Navega a la pantalla de la cámara
  };

  const goToLogin = () => {
    navigation.navigate('Login');
  };

  const goToRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <Image source={require('./assets/LogoLSM.png')} style={styles.logo} />
        <Text style={styles.headerText}>Traductor de LSM en tiempo real en videollamada</Text>
      </View>

      {/* Contenido principal */}
      <View style={styles.content}>
        <Text style={styles.welcome}>¡Bienvenido a la aplicación de VideoCall!</Text>
        <Text style={styles.instructions}>Próximamente podrás iniciar videollamadas aquí</Text>
      
        {/* Botón para iniciar la cámara */}
        <TouchableOpacity style={styles.button} onPress={iniciarCamara}>
          <Text style={styles.buttonText}>Iniciar cámara</Text>
        </TouchableOpacity>

        {/* Enlaces minimalistas para Iniciar Sesión y Registrarse */}
        <TouchableOpacity onPress={goToLogin}>
          <Text style={styles.linkText}>Iniciar Sesión</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={goToRegister}>
          <Text style={styles.linkText}>Registrarse</Text>
        </TouchableOpacity>
      </View>

      {/* Pie de página */}
      <View style={styles.footer}>
        <Text>© 2024 Traductor de LSM. Todos los derechos reservados a el profe.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Fondo blanco como solicitaste
  },
  header: {
    width: '100%',
    height: 120,
    backgroundColor: '#007BFF', // Color primario
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
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF', // Texto en blanco
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
    color: '#00796b',
    marginBottom: 20,
  },
  instructions: {
    fontSize: 18,
    color: '#333333',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#0056B3', // Color del botón
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  linkText: {
    fontSize: 16,
    color: '#212529', // Color del texto de los enlaces (minimalista)
    marginTop: 10,
    textDecorationLine: 'underline', // Para darle el aspecto de enlace
  },
  footer: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    alignItems: 'center',
  },
});

export default App;
