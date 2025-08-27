import Checkbox from 'expo-checkbox';
import { useState } from 'react';
import { Eye, EyeClosed } from "lucide-react-native";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, TextInput  } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function LoginScreen ({ navigation }) {

  const [isChecked, setChecked] = useState(false);
  const [canSeePassword, setCanSeePassword] = useState(true);


  return (
    <View style={styles.container}>
      <TouchableOpacity><Text style={styles.botaoVoltar} onPress={() => navigation.replace('Welcome')}>{"<"}</Text></TouchableOpacity>
      <Text style={styles.title}>Acesse</Text>
      <Text style={styles.subtitle}>com E-mail e senha</Text>

      <Text style={styles.label}>E-mail</Text>
      <TextInput 
          style={styles.input}
          placeholder='Digite seu E-mail'
      />

      <Text style={styles.label}>Senha</Text>
      <View style={styles.containerInputSenha}>
        <TextInput 
            style={styles.inputSenha}
            placeholder='Digite sua Senha'
            secureTextEntry={canSeePassword}
        />
        {canSeePassword ? (
            <Eye onPress={() => setCanSeePassword(false)} />
        ) : (
            <EyeClosed onPress={() => setCanSeePassword(true)} />
        )}
      </View>
      
      <View style={styles.checkboxArea}>
          <Checkbox style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? '#14C871' : undefined}
          />
          <Text style={styles.remindPassword}>Lembrar senha</Text>
          <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
      </View>

      <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.mainButton}>
              <Text style={styles.mainButtonText}>Acessar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}> 
              <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
      </View>

      <View style={styles.separator}>
          <View style={styles.line}></View>
          <Text>Ou continue com</Text>
          <View style={styles.line}></View>
      </View>

      <View style={styles.imageContainer}>
          <Image source={require('../../assets/Google.png')} style={styles.image}/>
          <Image source={require('../../assets/Facebook.png')} style={styles.image}/>
      </View>
    </View>
  );
}

// estilização
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    marginBottom: 100
  },
  botaoVoltar: {
    fontSize: 50,
    color: '#14C871',
    right: 150
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    right: 90
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    marginTop: 5,
    right: 93,
  },
  input: {
    width: 330,
    height: 60,
    borderRadius: 5,
    backgroundColor: '#dbdbdb',
    marginBottom: 20,
    padding: 20,
  },
  label: {
    right: 145,
  },
  inputSenha: {
    width: 310,
    height: 60,
    padding: 20,
  },
  containerInputSenha: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'space-between',
    backgroundColor: '#dbdbdb',
    borderRadius: 5,
  },
  checkboxArea: {
    flexDirection: 'row',
    margin: 10
  },
  checkbox: {
    right: 37
  },
  remindPassword: {
    right: 30
  },
  forgotPassword: {
    left: 37
  },
  buttonsContainer: {
    alignItems: "center",
    flexDirection: 'row',
    marginTop: 12
  },
  mainButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 155,
    height: 60,
    backgroundColor: '#14C871',
    borderRadius: 8,
    padding: 15,
    margin: 10,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 155,
    height: 60,
    backgroundColor: 'white',
    borderColor: "#14C871",
    borderWidth: 0.5,
    borderRadius: 8,
    padding: 15,
    margin: 10,
  },
  mainButtonText: {
    color: 'white',
    fontSize: 13,
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 13,
    textAlign: 'center',
  },
  separator: {
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'space-evenly', 
    alignItems: 'center',
    marginTop: 40,
    width: '90%',
  },
  line: {
    height: 1,
    backgroundColor: '#2A3844',
    width: "30%"
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "space-evenly",
    alignItems: 'center',
    marginTop: 20,
    width: '65%',
  },
  image: {
    width: 60,
    height: 60,
  }
});