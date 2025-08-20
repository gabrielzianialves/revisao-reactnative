import React from 'react';
import Checkbox from 'expo-checkbox';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, TextInput  } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function LoginScreen ({ navigation }) {

  return (
    <View style={styles.container}>
            <Text style={styles.title}>Acesse</Text>
            <Text style={styles.subtitle}>com E-mail e senha</Text>

            <Text style={styles.label}>E-mail</Text>
            <TextInput 
                style={styles.input}
                placeholder='Digite seu E-mail'
            />

            <Text style={styles.label}>Senha</Text>
            <TextInput 
                style={styles.input}
                placeholder='Digite sua Senha'
            />
            
            <View style={styles.checkboxArea}>
                <Checkbox
                />
                <Text>Lembrar senha</Text>
                <Text>Esqueci minha senha</Text>
            </View>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.mainButton} onPress={() => navigation.replace('Login')}>
                    <Text style={styles.mainButtonText}>Acessar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}> 
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
      </View>
  );
}

// estilização
const styles = StyleSheet.create({
    buttonsContainer: {
      alignItems: "center"
    },
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
      padding: 15,
    },
    title: {
      fontSize: 45,
      marginTop: 50,
      fontWeight: 'bold',
      right: 85,
    },
    subtitle: {
      fontSize: 16,
      marginBottom: 20,
      marginTop: 5,
      right: 85,
    },
    input: {
      width: 330,
      height: 60,
      borderRadius: 5,
      backgroundColor: '#dbdbdb',
      margin: 10,
    },
    label: {
      right: 85,
    }
  });