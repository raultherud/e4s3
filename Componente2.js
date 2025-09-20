import { View, Text, StyleSheet, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import imagen1 from '../assets/image1.jpg';
import imagen2 from '../assets/image2.avif';
import imagen3 from '../assets/image3.jpg';

export default function Componente2() {
  return (
    <View style={styles.container}>
      <Image source={imagen2} style={styles.imagen}></Image>
      <Text>Los dinosaurios, del superorden Dinosauria son un clado de saurópsidos​​ diápsidos arcosaurios que aparecieron durante el período Triásico con distribución cosmopolita.</Text>
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
    padding: 24,
    borderRadius: 25,
    margin: 20,
  },

  imagen: {
    height: 100,
    width: 100,
    margin: 10,
  },
});