import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, FlatList, Alert, Button } from 'react-native';
import React, { useState } from 'react';
import { ImageBackground } from 'react-native';

const peliculas = [
  'Anabelle',
  'Anabelle La creación',
  'Anabelle Vuelve a casa',
  'El conjuro',
  'El conjuro 2',
  'El conjuro 3 El Diablo me Obligó',
  'Cadaver',
  'El silencio de los inocentes',
  'Hannibal',
  'El Dragón rojo',
  'Saw',
  'Hostal',
  'El despertar de los muertos'
];

export default function App() {
  const [busqueda, setBusqueda] = useState('');
  const [peliculasFiltradas, setPeliculasFiltradas] = useState([]);

  const manejarBusqueda = () => {
    if (busqueda) {
      const resultados = peliculas.filter(pelicula => 
        pelicula.toLowerCase().includes(busqueda.toLowerCase())
      );
      setPeliculasFiltradas(resultados);
      if (resultados.length === 0) {
        Alert.alert('Sin resultados', 'No se encontraron titulos  que coincidan con la búsqueda.');
      }
    } else {
      setPeliculasFiltradas(peliculas);
    }
  };

  return (
    <ImageBackground source={require('./assets/images/f1.jpg')} style={styles.imagenFondo}>
      <View style={styles.contenedor}>
        <TextInput placeholder='Buscar película' style={styles.entradaTexto} value={busqueda}/>
        <Button title="Buscar" onPress={manejarBusqueda} color={'#00000'}/>
        {peliculasFiltradas.length > 0 && (
          <FlatList 
            data={peliculasFiltradas}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <Text style={styles.itemPelicula}>{item}</Text>}
            style={styles.lista}
          />
        )}
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imagenFondo: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  contenedor: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 10,
  },
  entradaTexto: {
    width: '80%',
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 5,
    color: 'white',
    marginBottom: 20,
    paddingLeft: 10,
  },
  lista: {
    width: '90%',
  },
  itemPelicula: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    color: '#fff',
  },
});

