import { StyleSheet, Text, View } from 'react-native';

export default function App() {
      return (
    <View style={styles.container}>
      <Text style={styles.titulo}>¡Hola mundo!</Text>

      <View style={styles.filas}>
        <View style={styles.caja1} />
        <View style={styles.caja2} />
        <View style={styles.caja3} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },    

  titulo: {
    fontSize: 24,
    color: 'blue',
    marginBottom: 30,
  },

  filas: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },

  caja1: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },

  caja2: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
  },

  caja3: {
    width: 100,
    height: 100,
    backgroundColor: 'cyan',
  },
});