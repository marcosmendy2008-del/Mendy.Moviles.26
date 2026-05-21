import { Text, View, Button, TextInput } from 'react-native';

export default function Saludo() {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white'
    }}>
      <Text>HOLA ESTA ES OTRA PANTALLA</Text>

      <TextInput
        placeholder="¡ingrese su nombre aqui!"
        style={{ width: 250, height: 50, borderColor: "brown", borderWidth: 1, marginVertical: 10, paddingHorizontal: 10 }}
      />
      
      <Button title="boton generico" onPress={() => alert("boton presionado")} />
      
    </View> 
  );
}