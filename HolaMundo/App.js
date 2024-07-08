import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react'; /* para manejo de estados de componentes */
import Prueba from './screens/Pruebas';
/* Use efect se usa para operaciones de las que no conocemos el resultado como la consulta a una api o BD */
export default function App() {
  const [user,setUser] = useState([]) /* Para asignar usuarios y setearlos */
  const [loading, setLoading] = useState(true) /* para asignar tiempos de espera de la carga */

  useEffect(()=>{ /* usa dos parametros, funcion y arreglo */
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(data=>{setUser(data), setLoading(false)} )
  }, [])  

/* el activity indicator usa solo 2 propiedades tamaño y color, es el spin que gira */
  if(loading){
    return <View style={styles.center} > 
      <ActivityIndicator size='large' color='#0000ff' />
      <Text> Carganding ... </Text>
    </View>
  }

  return (
  <View style={styles.container}>
   {/* <FlatList data={user} renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}/>*/}
    <StatusBar style="darck" />
    <Prueba> </Prueba>


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
center:{
flex:1,
alignItems:'center',
justifyContent:'center'
}


});





