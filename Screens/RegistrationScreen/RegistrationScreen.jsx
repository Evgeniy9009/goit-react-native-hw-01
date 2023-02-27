import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, Platform, KeyboardAvoidingView, Button } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

// const loadFonts = async () => {
//   await Font.loadAsync({
//     "Roboto-Regulat": require("../../assets/fonts/Roboto-Regular.ttf"),
//     "Roboto-Bold": require("../../assets/fonts/Roboto-Bold.ttf"),
//   });
// };

export default function RegistrationScreen({ navigation }) {

// const [isReady, setIsReady] = useState(false)
// if (!isReady) {
//     return <AppLoading startAsync={loadFonts} onFinish={() => setIsReady(true)}/>
// }

  const [isShowKeyBoard, setIsShowKeyBoard] = useState(false)
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/photo-bg.jpg")}
        style={styles.image}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={{...styles.form ,  height: isShowKeyBoard ?  550 : 550 }}>
          <Text style={styles.formTitle}>Регистрация</Text>
          <View>
            <TextInput
              style={styles.input}
              textAlign={"center"}
              placeholder="Логин"
              onFocus={() => setIsShowKeyBoard(true)}/>
          </View>
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
            <Text style={styles.buttonTitle}>Зарегистрироваться</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.btnBack} activeOpacity={0.8} onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={styles.btnBackTitle}>Уже есть аккаунт? Войти</Text>
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
    // height: 550,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,



  },
  formTitle:{
    // fontFamily: "Roboto-Regulat",
  //   fontStyle: normal,
  //   fontWeight: 500,
    
        marginTop:92,
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
    // fontFamily: "Roboto-Bold",
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

