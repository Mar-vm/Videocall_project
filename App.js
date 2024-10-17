import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons'; // Para los íconos
import { AntDesign } from '@expo/vector-icons'; 
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

const HomeScreen = ({ navigation }) => {
  const Llamar = () => {
    console.log("Llamar");
  };

  const irALogin = () => {
    console.log("Ir a Iniciar Sesión");
  };

  const irARegistrar = () => {
    console.log("Ir a Registrarse");
  };

  return (
    <View style={styles.container}>
      {/* Header con el logo y el perfil */}
      <View style={styles.header}>
        <Image source={require('./assets/LogoLSM.png')} style={styles.logo} />
        <Text style={styles.headerText}>Traductor de LSM en videollamada</Text>
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
        <Text>© 2024 Traductor de LSM. Todos los derechos reservados al profe Graza.</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
};

// Botón de navegación "< inicio"
const BackButton = ({ navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate('Inicio')}>
    <Text style={styles.backButton}>{'< inicio'}</Text>
  </TouchableOpacity>
);

// Componente para mostrar la barra superior con el botón "< inicio" y el título de la pantalla
const ScreenHeader = ({ title, navigation }) => {
  return (
    <View style={styles.headerContainer}>
      <BackButton navigation={navigation} />
      <Text style={styles.screenTitle}>{title}</Text>
    </View>
  );
};

// Componente para la pantalla de Contactos
const ContactosScreen = () => {
  // Ejemplo de lista de contactos
  const contactos = [
    { id: '1', nombre: 'Mariana García', telefono: '555-123-4567' },
    { id: '2', nombre: 'Juan Pérez', telefono: '555-987-6543' },
    { id: '3', nombre: 'Laura Méndez', telefono: '555-321-0987' },
    { id: '4', nombre: 'Carlos Ramírez', telefono: '555-654-1230' },
  ];

  const renderContacto = ({ item }) => (
    <View style={styles.contactContainer}>
      {/* Icono de usuario */}
      <AntDesign name="user" size={40} color="#007bff" style={styles.userIcon} />
      
      {/* Detalles del contacto */}
      <View style={styles.contactDetails}>
        <Text style={styles.contactName}>{item.nombre}</Text>
        <Text style={styles.contactPhone}>{item.telefono}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contactos</Text>
      
      {/* Lista de contactos */}
      <FlatList
        data={contactos}
        renderItem={renderContacto}
        keyExtractor={(item) => item.id}
        style={styles.contactList}
      />
    </View>
  );
};

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScreenHeader title="Perfil" navigation={navigation} />
      <Text>info de perfil</Text>
    </View>
  );
};

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScreenHeader title="Ajustes" navigation={navigation} />
      <Text>ajustes</Text>
    </View>
  );
};

const QaaScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScreenHeader title="Dudas" navigation={navigation} />
      <Text>Preguntas y respuestas</Text>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Inicio') {
              iconName = focused ? 'home' : 'home'; // Cambiado a un nombre válido
            } else if (route.name === 'Contactos') {
              iconName = focused ? 'contacts' : 'contacts'; // Cambiado a un nombre válido
            } else if (route.name === 'Perfil') {
              iconName = focused ? 'user' : 'user'; // Cambiado a un nombre válido
            } else if (route.name === 'Ajustes') {
              iconName = focused ? 'setting' : 'setting'; // Cambiado a un nombre válido
            } else if (route.name === 'Dudas') {
              iconName = focused ? 'questioncircle' : 'questioncircle'; // Cambiado a un nombre válido
            }

            // Puedes usar cualquier ícono que prefieras aquí
            return <AntDesign name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue', // Cambiar color cuando esté activa
          tabBarInactiveTintColor: 'gray', // Cambiar color cuando esté inactiva
          headerShown: false, // Oculta el encabezado superior
        })}
      >
        <Tab.Screen name="Inicio" component={HomeScreen} />
        <Tab.Screen name="Contactos" component={ContactosScreen} />
        <Tab.Screen name="Perfil" component={ProfileScreen} />
        <Tab.Screen name="Ajustes" component={SettingsScreen} />
        <Tab.Screen name="Dudas" component={QaaScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#f5f5f5',
    width: '100%',
    position: 'absolute', // Coloca el header en la parte superior
    top: 0, // Asegura que se mantenga en la parte superior
    zIndex: 1000, // Asegura que se muestre encima de otros elementos
    justifyContent: 'space-between',
  },
  backButton: {
    fontSize: 18,
    color: 'blue',
    marginRight: 10,
  },
  screenTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  logo: {
    width: 100,
    height: 100,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#f5f5f5',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50, // Deja espacio para el header
  },
  welcome: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    marginLeft: 10,
  },
  linkText: {
    color: 'blue',
    marginTop: 10,
  },
  footer: {
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  contactList: {
    flex: 1,
  },
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // Sombra en Android
  },
  userIcon: {
    marginRight: 15,
  },
  contactDetails: {
    flex: 1,
  },
  contactName: {
    fontSize: 18,
    fontWeight: '600',
  },
  contactPhone: {
    fontSize: 14,
    color: 'gray',
  },
});


///////////////////////////////////





//export default ContactosScreen;
