import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function WelcomeScreen ({ navigation }) {

  return (
    <View style={styles.container}>
        <Image source={require('../../assets/casual_dog.png')} style={styles.imagemCachorro} />
            <Text style={styles.title}>Ótimo dia!</Text>
            <Text style={styles.subtitle}>Como deseja acessar?</Text>

            <TouchableOpacity style={styles.mainButton} onPress={() => navigation.replace('Register')}> 
                <Image source={require('../../assets/Google.png')} style={styles.imagemLogo} />
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
      flexDirection: 'row',
      backgroundColor: '#14C871',
      padding: 10,
      borderRadius: 10,
      marginTop: 20,
      width: 250,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      backgroundColor: 'white',
      borderColor: "#14C871",
      padding: 15,
      borderRadius: 10,
      borderWidth: 0.5,
      marginTop: 20,
      width: 250,
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
      fontSize: 50,
      marginTop: 50,
      fontWeight: 'bold',
    },
    subtitle: {
      fontSize: 16,
      marginBottom: 20,
      marginTop: 10,
      textAlign: 'center',
    },
    imagemLogo: {
      width: 30,
      height: 30,
      backgroundColor: 'white',
      borderRadius: 5,
      padding: 5
    }
  });