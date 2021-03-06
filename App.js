import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Stack from './src/endPointAccess/navegacao/StackBusca'
import {NavigationContainer} from '@react-navigation/native'

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack/>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
