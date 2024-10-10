import React from 'react';
import { StyleSheet, Text, View, Button, Image, Alert } from 'react-native';

const App = () => {
  const iniciarCamara = () => {
    Alert.alert("Cámara", "La funcionalidad de la cámara se activará aquí.");
  };

  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <Image source={require('./assets/icon.png')} style={styles.logo} />
        <Text style={styles.headerText}>Nombre del Proyecto</Text>
      </View>

      {/* Contenido principal */}
      <View style={styles.content}>
        <Text style={styles.welcome}>¡Bienvenido a la aplicación de VideoCall!</Text>
        <Text style={styles.instructions}>Próximamente podrás iniciar videollamadas aquí.</Text>
      
        <Button
          title="Iniciar cámara"
          onPress={iniciarCamara} // Llama la función cuando se presiona el botón
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    width: '100%',
    height: 150, // Ajusta la altura del encabezado
    backgroundColor: '#ADD8E6', // Color azul claro
    flexDirection: 'row', // Cambia la dirección a fila para alinear la imagen y el texto horizontalmente
    alignItems: 'center', // Centra verticalmente los elementos
    padding: 10, // Añade algo de espacio interno
    position: 'absolute',
    top: 0,
  },
  logo: {
    width: 50, // Ancho de la imagen
    height: 50, // Alto de la imagen
    marginRight: 10, // Espacio a la derecha de la imagen
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150, // Empuja el contenido hacia abajo para que no quede detrás del encabezado
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  instructions: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
});

export default App;
