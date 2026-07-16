import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',

  },

  vista: {
    width: 250,
    height: 250,
    marginLeft:20,
    marginRight:20
  },

  rojo: { backgroundColor: 'red' },
  negro: { backgroundColor: 'black' },
  cian: { backgroundColor: 'cyan' },
  azul: { backgroundColor: 'blue' },
});

type cajasProps = {
  color: 'rojo' | 'azul' | 'cian';
};

function Caja({ color }: cajasProps) {
  const [activado, setActivado] = useState(true);
  
  return (
    <>
      <Pressable onPress={() => setActivado(!activado)}> 
        <View
          style={[
            style.vista,
            activado ? style[color] : style.negro
          ]}
        />
      </Pressable>
    </>
  );
}

export default function App() {
  return (
    <View style={style.container}>
      <Caja color="rojo" />
      <Caja color="azul" />
      <Caja color="cian" />
    </View>
  );
}