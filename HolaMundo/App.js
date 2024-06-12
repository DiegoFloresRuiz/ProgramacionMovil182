/*import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React,{useState} from 'react';



//con estado
const Texto = () => {
  const [contenido, setContenido] = useState('Hola Mundo Soy con estado')
  const actualizarContenido=()=>{setContenido('set actualizo este texto')}
  return(<Text onPress={actualizarContenido}>{contenido}</Text>)
} 
/*
con props simple 
const Texto = (props) => {
  const {contenido} = props
  return(<Text>{contenido}</Text>)
}*/ 

  /*
  Con children
  const Texto = (props) => {
    const {children} = props
    return(<Text>{children}</Text>)
  } */

/*export default function App() {
  return (
    <View style={styles.container}>
      <Texto contenido={'Hola Mundo'}></Texto>

      <Button title='Hoda' color="#000000"></Button>
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
  },
});*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

const Texto = ({ contenido, actualizarContenido }) => {
  return <Text onPress={actualizarContenido}>{contenido}</Text>;
};

export default function App() {
  const [contenido, setContenido] = useState('Hola Mundo Soy con estado');
  
  const actualizarContenido = () => {
    setContenido('set actualizo este texto');
  };

  return (
    <View style={styles.container}>
      <Texto contenido={contenido} actualizarContenido={actualizarContenido} />
      <Button title="Actualizar Texto" onPress={actualizarContenido} />
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
  },
});

