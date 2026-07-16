import { Text, View, Button, TextInput } from 'react-native';

function Card({ nombre }: { nombre: string }) {
  return (
    <View style={{padding: 20, backgroundColor: '#f0f0f0', borderRadius: 10, marginTop: 350}}>
      <Text style={{ fontWeight: 'bold' }}>{nombre}</Text>
      <Text>odio este lenguaje profe ayuda</Text>
    </View>
  );
}
export default function card()
{
    return(
      <Card nombre="sandwich insano" />
    )
}