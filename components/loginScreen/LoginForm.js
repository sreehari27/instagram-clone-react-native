import { View, Text, TextInput, Button, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'

import { Formik } from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'

const LoginForm = () => {
  return (
    <View>
      <View style={styles.inputField}>
        <TextInput
          placeholder='Phon number,username or e-mail'
          autoCapitalize='none'
          placeholderTextColor={'#444'}
          keyboardType='email-address'
          textContentType='emailAddress'
          autoFocus={true} />
      </View>
      <View style={styles.inputField}>
        <TextInput
          placeholder='Password'
          autoCapitalize='none'
          placeholderTextColor={'#444'}
          secureTextEntry={true}
          textContentType='password'
          autoFocus={false} />
      </View>
      <View style={{ alignItems: 'flex-end', marginBottom: 30 }}>
        <Text style={{ color: "#6BB0f5" }}>Forgot password?</Text>
      </View>
      <Pressable titleSize={20} style={styles.button}>
        <Text style={{ fontSize: 20, color: 'white' }}>Log in</Text>
      </Pressable>

      <View style={styles.signupContainer}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity>
          <Text style={{color:"#6BB0f5"}}> Sign up</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inputField: {
    borderRadius: 4,
    padding: 12,
    backgroundColor: '#fafafa',
    marginBottom: 10,
    borderWidth: 1
  },
  button: {
    backgroundColor: "#0096f6",
    alignItems: 'center',
    minHeight: 42,
    justifyContent: 'center',
    borderRadius: 4
  },
  signupContainer: {
    flexDirection:'row',
    width:'100%',
    justifyContent:'center',
    marginTop:50
  }
})

export default LoginForm