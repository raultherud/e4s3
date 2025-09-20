import { View, Text, StyleSheet, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import imagen1 from '../assets/image1.jpg';
import imagen2 from '../assets/image2.avif';
import imagen3 from '../assets/image3.jpg';

export default function Componente1() {
  return (
    <View style={styles.container}>
      <Image source={imagen1} style={styles.imagen}></Image>
      <Text>El cerdo es una subespecie de mamífero artiodáctilo de la familia Suidae. Es un animal doméstico usado en la alimentación humana por muchos pueblos. Su nombre científico es Sus scrofa ssp. domestica, aunque algunos autores lo denominan Sus domesticus o Sus domestica, reservando Sus scrofa para el jabalí.</Text>
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