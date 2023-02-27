import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, Platform, KeyboardAvoidingView, Button } from 'react-native';
import React, { useState} from 'react';



export default function LoginScreen({ navigation }) {

  const [isShowKeyBoard, setIsShowKeyBoard] = useState(false)
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/photo-bg.jpg")}
        style={styles.image}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={{...styles.form,  height: isShowKeyBoard ?  490 : 450 }}>
                      <Text style={styles.formTitle}>Войти</Text>
          <View>
            <TextInput
              style={styles.input}
              textAlign={"center"}
              placeholder="Адрес электронной почты"
              onFocus={() => setIsShowKeyBoard(true)}/>
          </View>
          <View>
            <TextInput
              style={styles.input}
              textAlign={"center"}
              placeholder="Пароль"
              onFocus={() => setIsShowKeyBoard(true)}/>
          </View>

          <TouchableOpacity style={styles.button} activeOpacity={0.8}>
            <Text style={styles.buttonTitle}>Войти</Text>
          </TouchableOpacity>
          
                      
            <TouchableOpacity style={styles.btnBack} activeOpacity={0.8} onPress={() => navigation.navigate('RegistrationScreen')}>
            <Text style={styles.btnBackTitle}>Нет аккаунта? Зарегистрироваться</Text>
          </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
        
      </ImageBackground>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    // alignItems: 'center'
  },
  form: {
    // height: 490,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

  },
  formTitle:{
  //   fontFamily: 'Roboto',
  //   fontStyle: normal,
  //   fontWeight: 500,
    
    marginTop:32,
    marginBottom: 32,

    textAlign: 'center',
    fontSize: 30,   
    color: '#212121'
  },
  input: {
    height: 50,
    marginHorizontal: 15,
    marginBottom: 16,
    borderRadius:8,
    // borderWidth: 1,
    backgroundColor: '#F6F6F6',
    textAlign: 'left',
    padding:16,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    shadowOpacity: 25
  },
  button: {
    // alignItems: center,
    marginHorizontal: 16,
    marginTop: 43,
    marginBottom: 16,
    height: 50,
    backgroundColor: '#FF6C00',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',

    ...Platform.select({
      ios: {
        backgroundColor: 'transparent',
        borderColor: '#FF6C00',
      },
      android: {
        backgroundColor: '#FF6C00',
        borderColor: 'transparent',
      }
    })
  },
  buttonTitle: {
    color: '#fff',
    // fontFamily: 'Roboto',
    // fontWeight: 400,
    fontSize: 16
    },
    btnBack: {
    alignItems: 'center',
    color: "#1B4371"
  },
  btnBackTitle: {
    // fontFamily: 'Roboto',
    fontSize: 16,
    color: "#1B4371"
  }
});

