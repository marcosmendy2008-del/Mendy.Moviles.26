import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';

export default function App() {
  const [usuarios, setUsuarios] = useState([]);//actualiza los datos cargados en tiempo real el usestate
  const [loading, setLoading] = useState(true);
  const [mostrar, setMostrar] = useState(false);
  
  const style = StyleSheet.create({
    none: {display:'none'},

    flex: {display:'flex'}
  })

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')//llama la api
      .then(res => res.json())//lo convierte a json o arreglo
      .then(json => {//el usestate guarda lo que esta en el json
        setUsuarios(json);
        setLoading(false);
        setMostrar(true);
      })
      .catch(error => {//un "else" por si no funciona que muestre un "error"
        console.error('Error al obtener los datos', error)
        setLoading(false);//no cargo
      });
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="green" />;//no funciona en teoria
  }

  function Lista(){
    return (
      <View style={{ flex: 1, padding: 20}}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10, color:'white' }}>
          Lista de usuarios
        </Text>

        <FlatList
          data={usuarios}
          keyExtractor={item => item.id.toString()}//convierte en string los id items de la api
          renderItem={({ item }) => (//renderizaa los items de item y les provee un estilo
            <View
              style={{
                padding: 10,
                marginBottom: 5,
                backgroundColor: '#f2f2f2',
                borderRadius: 10,
              }}
            >
              <Text style={{ fontWeight: 'bold' }}>
                {item.name}
              </Text>

              <Text>{item.email}</Text>
            </View>
          )}
        />
      </View>
    );
  }

  function Mensaje(){
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text style={{color:'red'}}>No se pudo mostrar a los usuarios</Text>
      </View>
    );  
  }

  return (
    <>
      {mostrar ? <Lista/> : <Mensaje/>//es un operador ternario que si mostrar lista si mostrar es falso y si no cae en el else de mensaje
}
    </>
  );
}