import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function WelcomeScreen ({ navigation }) {

  return (
    <View style={styles.container}>
        <View style={styles.formContainer}>

            <Image source={require('./assets/casual_dog.png')} style={styles.imagem} />
            <Text style={styles.title}>Ótimo dia!</Text>
            <Text style={styles.subtitle}>Como deseja acessar?</Text>

            <TouchableOpacity style={styles.mainButton} onPress={() => navigation.replace('Register')}> 
                <Image source={require('./assets/Google.png')} style={styles.imagem} />
                <Text style={styles.buttonText}>Como deseja acessar?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.replace('Login')}> 
                <Text style={styles.buttonText}>Outras opções</Text>
            </TouchableOpacity>

        </View>
      </View>
  );
}

// estilização
const styles = StyleSheet.create({
    mainButton: {
      backgroundColor: '#14C871',
      padding: 15,
      borderRadius: 15,
      marginTop: 20,
      width: 220
    },
    button: {
      backgroundColor: 'white',
      padding: 15,
      borderRadius: 15,
      marginTop: 20,
      width: 220
    },
    buttonText: {
      color: '#424242',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 25,
      marginTop: 50,
      fontWeight: 'bold',
    },
    titleName: {
      fontSize: 40,
      marginBottom: 15,
      fontWeight: 'bold',
      color: 'white'
    },
    subtitle: {
      fontSize: 16,
      color: 'white',
      marginBottom: 20,
      marginTop: 10,
      textAlign: 'center', 
      fontWeight: 'bold',
    },
    formContainer: { 
      margin: 10,
      width: windowWidth * 0.8, 
      height: 400,
      borderRadius: 20,
      alignItems: 'center',
      backgroundColor: '#84848494',
    },
  });