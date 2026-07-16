import { Background } from '@react-navigation/elements';
import { useState } from 'react';
import { Text, View, Button, TextInput, ScrollView, StyleSheet } from 'react-native';
 
function Completo ({nombre}){
   return(
        <Text style={{marginTop:20}}>Bienvenido {nombre}</Text>
   );
}

function Error ({nombre}){
   return(
        <Text style={{marginTop:20,fontSize:20}}>faltan datos {nombre}</Text>
   );
}
export default function Sesion()
{
    const [nombre, setNombre] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [formulario, setFormulario] = useState({nombre: ",contraseña:"});
    return(

    <View style={styles.container}>
        <View style={styles.card}>
        <TextInput style={styles.placeholders}
            placeholder = "Ingrese su nombre: "
            placeholderTextColor="#White"
            value={nombre}
            onChangeText={setNombre}
        />
        <TextInput style={styles.placeholders}
            placeholder = "Ingrese su contraseña:  "
            secureTextEntry={true}
            value={contraseña}          
            onChangeText={setContraseña} 
       />
                           {
                nombre === "" || contraseña === "" 
                    ? <Error/> 
                    :<Completo nombre={nombre}/>
            }
        </View>

    </View>
    );
}

const styles = StyleSheet.create({
    placeholders:{
    borderColor:'black',
    borderWidth: 1,               
    borderRadius: 8,   
    backgroundColor:'white',    
    width:250,
    height:30,  
    paddingTop:20,
    paddingBottom:20,
    gap:15,
    padding:10,
    marginTop:15,
    fontSize:15
    },

    body:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        padding: 20,
        marginVertical: 20, 
        borderRadius: 10,   
        shadowColor: "#000", 
        shadowOffset: { width: 0, height: 2 },
        borderColor:'black'
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
    shadowColor: "#00000000", 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    height:250,
        gap:15,
    borderColor:'black'
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
})
