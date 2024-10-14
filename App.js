// App.js
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen'; // Importa la pantalla de inicio de sesión
import ProfileScreen from './screens/ProfileScreen'; // Importa la pantalla de perfil
import RegisterScreen from './screens/RegisterScreen'; // Importa la pantalla de registro
import CameraScreen from './screens/CameraScreen'; // Importa la pantalla de la cámara
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons'; // Para los íconos
import { AntDesign } from '@expo/vector-icons'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
    navigation.navigate('Llamar'); // Navega a la pantalla de la cámara
  };

  const irALogin = () => {
    navigation.navigate('Login'); // Navega a la pantalla de inicio de sesión
  };

  const irARegistrar = () => {
    navigation.navigate('Register'); // Navega a la pantalla de registro
  };

  return (
    <View style={styles.container}>
      {/* Header con el logo y el perfil */}
      <View style={styles.header}>
        <Image source={require('./assets/LogoLSM.png')} style={styles.logo} />
        <Text style={styles.headerText}>Traductor de LSM en videollamada</Text>
        <TouchableOpacity style={styles.profileIcon} onPress={() => console.log('Perfil')}>
          {/* Aquí puedes agregar un icono de perfil si lo deseas */}
        </TouchableOpacity>
      </View>

      {/* Contenido principal */}
      <View style={styles.content}>
        <Text style={styles.welcome}>enlaza</Text>
        <TouchableOpacity style={styles.button} onPress={Llamar}>
          <Ionicons name="videocam" size={24} color="white" />
          <Text style={styles.buttonText}>Llamar</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={irALogin}>
          <Text style={styles.linkText}>Iniciar Sesión</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={irARegistrar}>
          <Text style={styles.linkText}>Registrarse</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text>© 2024 Traductor de LSM. Todos los derechos reservados al profe Garza.</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
};

// Componente para la pantalla de contactos
const ContactosScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Pantalla de Contactos</Text>
    </View>
  );
};
const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text>info de perfil</Text>
    </View>
  );
};
const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ajustes</Text>
    </View>
  );
};
const QaaScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Preguntas y respuestas</Text>
    </View>
  );
};


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Inicio" 
          component={HomeScreen} 
          options={{ 
            tabBarIcon: () => <Ionicons name="home" size={24} color="black" /> 
          }} 
        />
        <Tab.Screen 
          name="Contactos" 
          component={ContactosScreen} 
          options={{ 
            tabBarIcon: () => <AntDesign name="team" size={24} color="black" /> 
          }} 
        />
        <Tab.Screen 
          name="Perfil" 
          component={ProfileScreen}  
          options={{ 
            tabBarIcon: () => <AntDesign name="user" size={24} color="black" /> 
          }} 
        />
        <Tab.Screen 
          name="Ajustes" 
          component={SettingsScreen} 
          options={{ 
            tabBarIcon: () => <AntDesign name="setting" size={24} color="black" /> 
          }} 
        />
        <Tab.Screen 
          name="Dudas" 
          component={QaaScreen} 
          options={{ 
            tabBarIcon: () => <AntDesign name="question" size={24} color="black" /> 
          }} 
        />
        {/* Agrega más pestañas según sea necesario */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
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
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  instructions: {
    fontSize: 18,
    color: '#333',
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
    width: '80%',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#white',
    fontSize: 18,
    marginLeft: 10
  },
  linkText: {
    color: '#007BFF',
    fontSize: 16,
    marginTop: 10,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
});

export default App;
