import { Link } from "expo-router";
import { Children } from "react";
import {View, Text} from "react-native";
import { red } from "react-native-reanimated/lib/typescript/Colors";
<Link href="/perfil">ir a perfil</Link>

export default function App(){
  return(
    <View style={{flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white'}}>
      <Text>hola react!</Text>
    </View>
  );
  

}