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
import { StyleSheet, Text, View, Button, TextInput, ScrollView, Dimensions, FlatList,  } from 'react-native';
//import React, { useState } from 'react';

/*const Texto = ({ contenido, actualizarContenido, estilo }) => {
  return <Text style={[styles.text,estilo]} onPress={actualizarContenido}>{contenido}</Text>;
};*/

// renderItem ietera toda la lista 

export default function App() {
  
  return (
    <View style={styles.container}>

      <FlatList data={[
          {key:'1', name:'Diego'},
          {key:'2', name:'Ivan Isay'},
          {key:'3', name:'Jose Guadalupe'},
          {key:'4', name:'Mariana'},
          {key:'5', name:'Sara'},
          {key:'6', name:'Diego'},
          {key:'7', name:'Ivan Isay'},
          {key:'8', name:'Jose Guadalupe'},
          {key:'9', name:'Mariana'},
          {key:'10', name:'Sara'},
          {key:'11', name:'Diego'},
          {key:'12', name:'Ivan Isay'},
          {key:'13', name:'Jose Guadalupe'},
          {key:'14', name:'Mariana'},
          {key:'15', name:'Sara'},
          {key:'16', name:'Diego'},
          {key:'17', name:'Ivan Isay'},
          {key:'18', name:'Jose Guadalupe'},
          {key:'19', name:'Mariana'},
          {key:'20', name:'Sara'},
        ]} 
        renderItem={  ({item})=> <Text style={styles.item}> {item.name} </Text> }
        />
      <StatusBar style="auto" />
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', // con row vemos de izquiera a derecha, con column-reverse los vemos al reves y pasa lo mimo con los column
    backgroundColor: '#fff',
    alignItems: 'strech', // flex-start pociona los cuadros a mano izquierda y con end al lado derecho  y el strechtoma todo lo largo dela pantalla
    justifyContent: 'center', // coloca todo ya sea arriba o abajo flex-start y flex-end , space-between (crea espacios entre componentes )
    paddingTop:80,

  },

    item:{
      padding:10,
      fontSize:30,
      height:50,
      borderColor:'black',
      borderBottomWidth:1,
      height:'100%',
      textAlign:'center',

    },

});

