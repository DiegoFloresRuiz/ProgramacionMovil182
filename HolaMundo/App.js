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

const Texto = ({ contenido, actualizarContenido, estilo }) => {
  return <Text style={[styles.text,estilo]} onPress={actualizarContenido}>{contenido}</Text>;
};

export default function App() {
  const [contenido, setContenido] = useState('Hodaaa como tas!');
  
  const actualizarContenido = () => {
    setContenido('set actualizo este texto');
  };

  return (
    <View style={styles.container}>
      <Texto estilo={styles.black} contenido={contenido} actualizarContenido={actualizarContenido} />
      <Texto estilo={styles.red} contenido={contenido} actualizarContenido={actualizarContenido} />
      <Texto estilo={styles.amarillo} contenido={contenido} actualizarContenido={actualizarContenido} />
      {/* <Button title="Actualizar Texto" onPress={actualizarContenido} /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', // con row vemos de izquiera a derecha, con column-reverse los vemos al reves y pasa lo mimo con los column
    backgroundColor: '#fff',
    alignItems: 'center', // flex-start pociona los cuadros a mano izquierda y con end al lado derecho  y el strechtoma todo lo largo dela pantalla
    justifyContent: 'space-between', // coloca todo ya sea arriba o abajo flex-start y flex-end , space-between (crea espacios entre componentes )
    
  },

  text:{
  color:'white',
  fontSite:80,
  },
  //Creamos tres backgroundColor cada uno de un color distinto para apalicar estos estilos de forma independiente 
  black:{
    backgroundColor:'black',
    width:200,
    height:50,
    textAlign:'center',
    //flex:1,
  },
  red:{
    backgroundColor:'red',
    width:200,
    height:50,
    textAlign:'center',
    //flex:1,
  },
  amarillo:{
    backgroundColor:'yellow',
    color:'black',
    width:200,
    height:50,
    textAlign:'center',
    //flex:1,
  },
});

