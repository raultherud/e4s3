import { View, Text, StyleSheet, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import imagen1 from '../assets/image1.jpg';
import imagen2 from '../assets/image2.avif';
import imagen3 from '../assets/image3.jpg';

export default function Componente2() {
  return (
    <View style={styles.container}>
      <Image source={imagen3} style={styles.imagen}></Image>
      <Text>El pollo es la cría de las gallinas y otras aves, y también se emplea para nombrar la carne de este animal. Para que un pollito alcance el peso idóneo para producir carne, deben transcurrir 49 días, en promedio.</Text>
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