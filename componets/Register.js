import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

export const Register = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
      await AsyncStorage.setItem('userName', name);
      await AsyncStorage.setItem('userEmail', email);
      await AsyncStorage.setItem('userContact', contact);
      await AsyncStorage.setItem('userPassword', password);
      console.warn('Data saved successfully');
    } catch (error) {
      console.warn('Failed to save data', error);
    }
  };

  const handleCancel = () => {
    setName('');
    setEmail('');
    setContact('');
    setPassword('');
    console.warn('Form reset');
  };

  return (
    <View style={styles.Container}>
      <View style={styles.loginback}>
        <Text style={styles.textHeader}>Register Form</Text>

        <TextInput
          style={styles.textInput}
          placeholder="Enter Your Name"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Enter Your Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Enter Your Contact"
          maxLength={10}
          value={contact}
          onChangeText={setContact}
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
            onPress={handleSubmit}
          >
            <Text style={styles.textBtn1}>Submit</Text>
          </Pressable>
          <Pressable
            style={styles.cancelBtn}
            onPress={handleCancel}
          >
            <Text style={styles.textBtn}>Cancel</Text>
          </Pressable>
        </View>

        <Pressable style={styles.pressableBtn1} onPress={() => props.navigation.navigate('Login')}>
          <Text style={styles.textBtn}>Signup/SignIn</Text>
        </Pressable>
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
    height: 500,
    width: 300,
    marginTop: 100,
    marginLeft: '12%',
    alignItems: 'center',
    borderBottomEndRadius: 50,
    borderBottomLeftRadius: 30,
    borderRadius: 20,
  },
  textHeader: {
    textAlign: 'center',
    fontSize: 30,
    margin: 10,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
    marginTop: 20,
  },
  textBtn1: {
    fontSize: 13,
    textAlign: 'center',
    padding: 10,
    color: 'white',
  },
  textBtn: {
    fontSize: 13,
    textAlign: 'center',
    padding: 10,
    color: 'white',
  },
  pressableBtn: {
    backgroundColor: 'green',
    borderRadius: 6,
    width: '45%',
    alignItems: 'center',
  },
  cancelBtn: {
    backgroundColor: 'red',
    borderRadius: 6,
    width: '45%',
    alignItems: 'center',
  },
  pressableBtn1: {
    margin: 20,
    marginHorizontal: 62,
    borderRadius: 6,
    width: '45%',
    alignItems: 'center',
  },
});

