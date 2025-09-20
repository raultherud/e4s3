import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Componente1 from './components/Componente1';
import Componente2 from './components/Componente2';
import Componente3 from './components/Componente3';

export default function App() {
  return (
    <View style={styles.container}>
      <Componente1/>
      <Componente2/>
      <Componente3/>
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
