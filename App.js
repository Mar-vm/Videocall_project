import React from 'react';
import { View, StatusBar } from 'react-native';
import CallScreen from './screens/VideoCallScreen';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <CallScreen />
    </View>
  );
}