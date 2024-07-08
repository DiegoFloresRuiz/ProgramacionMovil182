import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Alert, Button, ImageBackground } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [nombre, setName] = useState('');
  const [ema, setEmail] = useState('');
  const [pas, setPassword] = useState('');

  const handleSave = () => {
    Alert.alert(
      'Formulario Enviado',
      `Nombre: ${nombre}\nEmail: ${ema}\nPassword: ${pas}`,
      [
        {
          text: 'OK',
          style: 'default',
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <ImageBackground source={require('./assets/images/h1.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.contb}>
          <Text style={styles.tx}>Nombre:</Text>
          <TextInput style={styles.Tex} placeholder='Nombre' value={nombre} onChangeText={setName} />
          <Text style={styles.tx}>Email:</Text>
          <TextInput style={styles.Tex} placeholder='Email' value={ema} onChangeText={setEmail}/>
          <Text style={styles.tx}>Password:</Text>
          <TextInput style={styles.Tex} placeholder='Password' value={pas} onChangeText={setPassword} secureTextEntry />
          <Button title='Guardar' style={styles.boton} onPress={handleSave} color="#000000"/>
        </View>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    height:'100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 10,
  },
  Tex: {
    width: '100%',
    height: 40,
    backgroundColor: '#B5B2B2',
    borderRadius: 5,
    color: '#F4F4F4',
    marginBottom: 20,
    paddingLeft: 10,
  },
  tx: {
    color: 'black',
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  contb: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    shadowColor: '#000',
  },
  boton: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  botont: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

