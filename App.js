import React from 'react';
import { StyleSheet, Text, View, Image, Alert, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CameraScreen from './screens/CameraScreen'; // Asegúrate de que esta ruta sea correcta

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
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

  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <Image source={require('./assets/LogoLSM.png')} style={styles.logo} />
        <Text style={styles.headerText}>Traductor de LSM en videollamada</Text>
      </View>

      {/* Contenido principal */}
      <View style={styles.content}>
        <Text style={styles.welcome}>¡Bienvenido a la aplicación de VideoCall!</Text>
        <Text style={styles.instructions}>Próximamente podrás iniciar videollamadas aquí</Text>
      
        <TouchableOpacity style={styles.button} onPress={iniciarCamara}>
          <Text style={styles.buttonText}>Iniciar cámara</Text>
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
    backgroundColor: '#e0f7fa',
  },
  header: {
    width: '100%',
    height: 120,
    backgroundColor: '#23b5d3',
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
    fontSize: 20, // Aumentar el tamaño del texto
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150,
  },
  welcome: {
    fontSize: 30, // Aumentar el tamaño del texto
    fontWeight: 'bold',
    color: '#00796b',
    marginBottom: 20,
  },
  instructions: {
    fontSize: 18, // Aumentar el tamaño del texto
    color: '#333',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ff5722',
    padding: 15, // Aumentar el padding
    borderRadius: 10, // Esquinas más redondeadas
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20, // Aumentar el tamaño del texto del botón
    textAlign: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    alignItems: 'center',
  },
});

export default App;
