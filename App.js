import React from 'react';
import HomeScreen from './Screens/HomeScreen'; // Importa la pantalla HomeScreen

export default function App() {
  return <HomeScreen />; // Renderiza la pantalla HomeScreen
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

