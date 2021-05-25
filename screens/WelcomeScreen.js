import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  Modal,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class WelcomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      emailId: '',
      password: '',
      firstName: '',
      lastName: '',
      address: '',
      contact: '',
      confirmPassword: '',
      isModalVisible: 'false',
    };
  }

  userSignUp = (emailId, password, confirmPassword) => {
    if (password !== confirmPassword) {
      return alert("So sorry, password is not matching, so please check your password.");
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(emailId, password)
        .then(() => {
          db.collection('users').add({
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            contact: this.state.contact,
            email_id: this.state.emailId,
            address: this.state.address,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
          });
          return alert('User Added Successfully. Now you can use the app with the email id and the password.', '', [
            {
              text: 'OK',
              onPress: () => this.setState({ isModalVisible: false }),
            },
          ]);
        })
        .catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          return alert(errorMessage);
        });
    }
  };

  userLogin = (emailId, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(emailId, password)
      .then(() => {
       this.props.navigation.navigate('Home')
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return alert(errorMessage);
      });
  };

  showModal = () => {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.state.isModalVisible}>
        <Text style={styles.modalTitle1}>
        <b>
          <u>Barter System App</u>
        </b>
              </Text>
        <View style={styles.modalContainer}>
          <ScrollView style={{ width: '100%' }}>
            <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
              <Text style={styles.modalTitle}>
                <b>
                  <u>Registration Form</u>
                </b>
              </Text>
              <TextInput
                style={styles.formTextInput}
                placeholder={'Enter your first name here'}
                placeholderTextColor="black"
                maxLength={10}
                onChangeText={(text) => {
                  this.setState({
                    firstName: text,
                  });
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder={'Enter your last name here'}
                placeholderTextColor="black"
                maxLength={10}
                onChangeText={(text) => {
                  this.setState({
                    lastName: text,
                  });
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder={'Enter your contact no here'}
                placeholderTextColor="black"
                maxLength = {10}
                keyboardType={'numeric'}
                onChangeText={(text) => {
                  this.setState({
                    contact: text,
                  });
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder={'Enter your address here'}
                placeholderTextColor="black"
                multiline={true}
                onChangeText={(text) => {
                  this.setState({
                    address: text,
                  });
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder={'Enter your email id here'}
                placeholderTextColor="black"
                keyboardType={'email-id'}
                onChangeText={(text) => {
                  this.setState({
                    emailId: text,
                  });
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder={'Enter your password here'}
                placeholderTextColor="black"
                secureTextEntry={true}
                onChangeText={(text) => {
                  this.setState({
                    password: text,
                  });
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder={'Confrim your password here'}
                placeholderTextColor="black"
                secureTextEntry={true}
                onChangeText={(text) => {
                  this.setState({
                    confirmPassword: text,
                  });
                }}
              />
              <View style={styles.modalBackButton}>
                <TouchableOpacity
                  style={styles.registerButton}
                  onPress={() =>
                    this.userSignUp(
                      this.state.emailId,
                      this.state.password,
                      this.state.confirmPassword
                    ) 
                  }
                  >
                  <Text style={styles.registerButtonText}>Register</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.modalBackButton}>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={() => this.setState({ isModalVisible: false })}>
                  <Text
                    style={{fontSize: 20,fontWeight: 'bold',fontFamily: 'footlight mt light'}}>
                    Cancel
                  </Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </Modal>
    );
  };
  render() {
    return (
      <View style={styles.allData}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}></View>
        {this.showModal()}
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.header}>
            <u>
              <b> Barter System </b>
            </u>
          </Text>
          <Image
            style={styles.imageIcon}
            source={require('../assets/barter.png')}
          />
          <View style={styles.buttonContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your email here"
              placeholderTextColor="black"
              keyboardType="email-address"
              onChangeText={(text) => {
                this.setState({
                  emailId: text,
                });
              }}
            />

            <TextInput
              style={styles.textInput}
              secureTextEntry={true}
              placeholder="Enter the password here"
              placeholderTextColor="black"
              onChangeText={(text) => {
                this.setState({
                  password: text,
                });
              }}
            />
          </View>
          <TouchableOpacity
            style={[styles.button, { marginBottom: 20, marginTop: 20 }]}
            onPress={() => {
              this.userLogin(this.state.emailId, this.state.password);
            }}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.userSignUp(this.state.emailId, this.state.password);
            }}>
            <Text style={styles.buttonText}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  allData: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  header: {
    fontFamily: 'footlight mt light',
    fontSize: 30,
    textAlign: 'center',
    padding: 5,
    backgroundColor: '#ffc700',
    margin: 5,
    border: 'dashed',
    borderRadius: 10,
  },
  imageIcon: {
    width: 300,
    height: 280,
    border: 'dashed',
    alignSelf: 'center',
    marginTop: 10,
    backgroundColor: 'gold'
  },
  textInput: {
    width: 290,
    height: 40,
    border: 'dashed',
    borderColor: 'black',
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'footlight mt light',
    backgroundColor: 'white',
    marginTop: 10,
    fontSize: 20,
  },
  buttonText: {
    fontSize: 23,
    fontWeight: 'bold',
    fontFamily: 'footlight mt light',
  },
  button: {
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#ffc700',
    marginLeft: 10,
    border: 'dashed',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
  },
  modalTitle: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 25,
    margin: 10,
    padding: 5,
    fontFamily: 'footlight mt light',
  },
  modalTitle1: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 32,
    border: 'dashed',
    borderRadius: 10,
    margin: 10,
    padding: 10,
    backgroundColor: 'gold',
    fontFamily: 'footlight mt light',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
    border: 'dashed',
    backgroundColor: 'gold',
    borderRadius: 10,
  },
  formTextInput: {
    width: '75%',
    height: 35,
    alignSelf: 'center',
    border: 'dashed',
    borderWidth: 1,
    marginTop: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    fontFamily: 'footlight mt light',
    fontWeight: 'bold',
    fontSize: 14.5,
  },
  registerButton: {
    width: 200,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 30,
    border: 'dashed',
    alignSelf: 'center',
    backgroundColor: 'orange',
  },
  registerButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'footlight mt light',
  },
  cancelButton: {
    width: 200,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 30,
    border: 'dashed',
    alignSelf: 'center',
    backgroundColor: 'orange',
    marginBottom: 10,
  },
});