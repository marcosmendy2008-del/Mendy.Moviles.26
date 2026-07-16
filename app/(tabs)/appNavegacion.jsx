import * as React from 'react';
import { View, Text, Button, Alert, TextInput, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useState } from 'react';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// --- PANTALLAS DE LAS PESTAÑAS (TABS) ---
function InicioTab() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#333' }}>
      <Text style={{ color: 'white', fontSize: 18 }}>Pantalla Principal de la App</Text>
    </View>
  );
}

function PerfilTab() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#333' }}>
      <Text style={{ color: 'white', fontSize: 18 }}>Este es tu Perfil de Usuario</Text>
    </View>
  );
}

function ConfiguracionTab() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#333' }}>
      <Text style={{ color: 'white', fontSize: 18 }}>Configuración del Sistema</Text>
    </View>
  );
}

// --- PANTALLAS EXCLUSIVAS DEL MENÚ LATERAL ---
function AboutScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#333' }}>
      <Text style={{ color: 'white', fontSize: 18 }}>Desarrollado por Dev Tranquilo</Text>
    </View>
  );
}

function SalirScreen({ onLogout }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#333' }}>
      <Text style={{ color: 'white', marginBottom: 20, fontSize: 18 }}>¿Quieres cerrar sesión?</Text>
      <Button title="Bloquear App de Nuevo" color="#f44336" onPress={onLogout} />
    </View>
  );
}

// --- CONTENEDOR DE PESTAÑAS ---
function MisTabs() {
  return (
    <Tab.Navigator initialRouteName="Inicio" screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Inicio" component={InicioTab} />
      <Tab.Screen name="Perfil" component={PerfilTab} />
      <Tab.Screen name="Configuracion" component={ConfiguracionTab} />
    </Tab.Navigator>
  );
}

// --- PANTALLA DE LOGIN CON TU LÓGICA DE ALERTA Y BLOQUEO ---
function Sesion({ onLoginSuccess }) {
  const [nombre, setNombre] = useState('');
  const [contraseña, setContraseña] = useState('');

  // Verificamos si ambos campos tienen texto para activar el botón
  const camposCompletos = nombre.trim() !== '' && contraseña.trim() !== '';

  const manejarIngreso = () => {
    // Mostramos la alerta nativa que pensaste
    Alert.alert(
      "Acceso Concedido",
      `¡Hola ${nombre}! Ya puedes acceder a las demás rutas de la aplicación.`,
      [
        { 
          text: "Entrar", 
          onPress: () => onLoginSuccess() // Al darle OK, desbloqueamos la app
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Simulador de Login</Text>
        
        <TextInput 
          style={styles.placeholders}
          placeholder="Ingrese su nombre: "
          placeholderTextColor="#666"
          value={nombre}
          onChangeText={setNombre}
        />
        <TextInput 
          style={styles.placeholders}
          placeholder="Ingrese su contraseña: "
          placeholderTextColor="#666"
          secureTextEntry={true}
          value={contraseña}          
          onChangeText={setContraseña} 
        />

        <View style={styles.contenedorBoton}>
          {/* El botón cambia de color y se activa SÓLO si hay datos ingresados */}
          <Button 
            title={camposCompletos ? "INGRESAR" : "FALTAN DATOS"} 
            color={camposCompletos ? "#4CAF50" : "#d32f2f"} // Verde si está listo, Rojo si falta rellenar
            disabled={!camposCompletos} // Bloqueado nativamente si está vacío
            onPress={manejarIngreso}
          />
        </View>
      </View>
    </View>
  );
}

// --- COMPONENTE PRINCIPAL (EL GUARDIÁN DE RUTAS) ---
export default function App() {
  const [isAutenticado, setIsAutenticado] = useState(false);

  // SISTEMA DE SEGURIDAD SIMULADO:
  // Si NO está autenticado, la app NUNCA lee el Drawer. Solo existe el Login.
  if (!isAutenticado) {
    return <Sesion onLoginSuccess={() => setIsAutenticado(true)} />;
  }

  // Si está autenticado, el Login desaparece y se construyen las rutas protegidas
  return (
    <Drawer.Navigator initialRouteName="Principal">
      <Drawer.Screen name="Principal" component={MisTabs} />
      <Drawer.Screen name="Acerca de" component={AboutScreen} />
      <Drawer.Screen name="Salir">
        {() => <SalirScreen onLogout={() => setIsAutenticado(false)} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}

// --- ESTILOS ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1a1a', // Fondo oscuro para que combine con el resto de tus pantallas
  },
  card: {
    backgroundColor: '#333',
    padding: 25,
    alignItems: 'center',
    borderRadius: 15,   
    width: 300,
    height: 320,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#444'
  },
  titulo: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  placeholders: {
    borderColor: '#555',
    borderWidth: 1,               
    borderRadius: 8,   
    backgroundColor: 'white',    
    width: '100%',
    height: 45,  
    paddingHorizontal: 12,
    marginTop: 15,
    fontSize: 15,
    color: 'black'
  },
  contenedorBoton: {
    marginTop: 25,
    width: '100%',
    borderRadius: 8,
    overflow: 'hidden' // Para que el botón de Android respete el borde redondeado
  }
});
