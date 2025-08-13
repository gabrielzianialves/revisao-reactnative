import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function WelcomeScreen ({ navigation }) {

  return (
    <View style={styles.container}>
        <Image source={require('./assets/casual_dog.png')} style={styles.imagem} />
            <Text style={styles.title}>Ótimo dia!</Text>
            <Text style={styles.subtitle}>Como deseja acessar?</Text>

            <TouchableOpacity style={styles.mainButton} onPress={() => navigation.replace('Register')}> 
                <Image source={require('./assets/Google.png')} style={styles.imagem} />
                <Text style={styles.mainButtonText}>Como deseja acessar?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.replace('Login')}> 
                <Text style={styles.buttonText}>Outras opções</Text>
            </TouchableOpacity>
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
      borderColor: "#14C871",
      padding: 15,
      borderRadius: 15,
      marginTop: 20,
      width: 220
    },
    mainButtonText: {
      color: 'white',
      fontSize: 12,
      textAlign: 'center',
    },
    buttonText: {
      fontSize: 12,
      textAlign: 'center',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Inter',
    },
    title: {
      fontSize: 25,
      marginTop: 50,
      fontWeight: 'bold',
    },
    subtitle: {
      fontSize: 16,
      marginBottom: 20,
      marginTop: 10,
      textAlign: 'center',
    }
  });