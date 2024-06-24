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
import { StyleSheet, Text, View, Button, TextInput, ScrollView, Dimensions } from 'react-native';
import React, { useState } from 'react';

/*const Texto = ({ contenido, actualizarContenido, estilo }) => {
  return <Text style={[styles.text,estilo]} onPress={actualizarContenido}>{contenido}</Text>;
};*/



export default function App() {

  const[text, setText]=useState('')
  const[submit, setSubmit]=useState('')
  
  return (
    <View style={styles.container}>

      <ScrollView style={styles.scroll}>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <Text> Componente TexInput: {submit} </Text>
      <TextInput style={styles.Tex}  placeholder='Cual es tu nombre: ' onChangeText= { t=>setText(t) } defaultValue={text} />
        <Button title='Puchurrame' style={styles.boton} onPress={ ()=>{setSubmit(text); alert('Texto enviado')} }/>
        </ScrollView>
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
    justifyContent: 'center', // coloca todo ya sea arriba o abajo flex-start y flex-end , space-between (crea espacios entre componentes )
    
  },

  Tex:{
    width:'100%',
    height:35,
    backgroundColor:'#B5B2B2',
    borderBottomStartRadius:5,
    borderBottomEndRadius:5,
    color:'#F4F4F4',
    textAlign:'center',

  },
  boton:{
    marginTop:'5%',
    backgroundColor:'black',
  },
  scroll:{
    width:Dimensions.get('window').width,
  },
});

