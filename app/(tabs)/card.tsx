import React from 'react';
import { Text, View, Button, TextInput, Image, ScrollView, StyleSheet } from 'react-native';

export default function Saludo() {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        
        {/* PRIMERA CARD - Miyabi */}
        <View style={styles.card}>
          <TextInput
            placeholder="¡ingrese su nombre aqui!"
            placeholderTextColor="#ccc"
            style={styles.input}
          />

          <Image
            source={{
              uri: "https://media.tenor.com/275rzFwTbF8AAAA1/miyabi-miyabi-no.webp",
            }}
            style={styles.image}
          />
          
          <Button title="boton generico" onPress={() => alert("boton presionado")} />
        </View>

        {/* SEGUNDA CARD - Vivian */}
        <View style={styles.card}>
          <TextInput
            placeholder="¡ingrese su nombre aqui!"
            placeholderTextColor="#ccc"
            style={styles.input}
          />

          <Image
            source={{
              uri: "https://media.tenor.com/BeY817MrRB8AAAAM/astra-yao-zzz.gif",
            }}
            style={styles.imagen}
          />
          
          <Button title="boton generico" onPress={() => alert("boton presionado")} />
        </View>

        {/* TERCERA CARD - Cissia */}
        <View style={styles.card}>
          <TextInput
            placeholder="¡ingrese su nombre aqui!"
            placeholderTextColor="#ccc"
            style={styles.input}
          />

          <Image
            source={{
              uri: "https://media.tenor.com/BeY817MrRB8AAAAM/astra-yao-zzz.gif",
            }}
            style={styles.image}
          />
          
          <Button title="boton generico" onPress={() => alert("boton presionado")} />
        </View>

      </View>
    </ScrollView>
  );
}

// Estilos ordenados abajo
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40, 
  },
  card: {
    backgroundColor: 'gray',
    padding: 20,
    alignItems: 'center',
    marginVertical: 20, 
    borderRadius: 10,   
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    width: 250,
    height: 50,
    borderColor: "brown",
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white', 
  },
  image: {
    width: 500,
    height: 500,
    marginBottom: 15,
  },
  imagen:{
    width: 500,
    height: 250,
    marginBottom: 15,
  }
});