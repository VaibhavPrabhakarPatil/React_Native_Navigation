import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

export const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
      await AsyncStorage.setItem('userEmail', email);
      await AsyncStorage.setItem('userPassword', password);
      // Navigate or show a success message
      console.log('Data saved successfully');
    } catch (e) {
      console.error('Failed to save data', e);
    }
  };

  return (
    <View style={styles.Container}>
      <View style={styles.loginback}>
        <Text style={styles.textHeader}>Login Form</Text>

        <TextInput
          style={styles.textInput}
          placeholder="Enter Your Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Enter Your Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.pressableBtn}
            onPress={handleSubmit} // Trigger the data storage on button press
          >
            <Text style={styles.textBtn1}>Login</Text>
          </Pressable>
          <Pressable style={styles.pressableBtn1} onPress={() => props.navigation.navigate('Register')}>
            <Text style={styles.textBtn}>SignIn/Signup</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'blue',
    height: 350,
    borderBottomEndRadius: 70,
    borderBottomLeftRadius: 70,
  },
  loginback: {
    backgroundColor: 'skyblue',
    height: 400,
    width: 300,
    marginTop: 180,
    marginLeft: '12%',
    alignItems: 'center',
    borderBottomEndRadius: 50,
    borderBottomLeftRadius: 30,
    borderRadius: 20,
  },
  textHeader: {
    textAlign: 'center',
    fontSize: 30,
    margin: 20,
  },
  textInput: {
    marginLeft: 24,
    margin: 20,
    width: '70%',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    borderRadius: 5,
    fontSize: 13,
  },
  buttonContainer: {
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20,
  },
  textBtn1: {
    fontSize: 15,
    textAlign: 'center',
    padding: 10,
    color: 'white',
  },
  textBtn: {
    fontSize: 13,
    textAlign: 'center',
    padding: 10,
    color: 'black',
    textDecorationLine: 'underline',
  },
  pressableBtn1: {
    margin: 20,
    marginHorizontal: 62,
    borderRadius: 6,
    width: '45%',
    alignItems: 'center',
  },
  pressableBtn: {
    backgroundColor: 'green',
    borderRadius: 6,
    width: '60%',
    alignItems: 'center',
    marginHorizontal: 44,
  },
});
