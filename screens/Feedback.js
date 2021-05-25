import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader';

export default class FeedbackScreen extends React.Component {
  increaseLikes = () => {
    db.collection('Likes').add({
      Name: this.state.name + ' Has Liked Your app',
      Likes: this.state.likes + 1,
      Date: firebase.firestore.Timestamp.now().toDate(),
    });
    alert('Thank You For Submitting Your Feedback');
  }
  constructor(props) {
    super(props);
    this.state = {
      feedbackBox: '',
      name: '',
      email: '',
      likes: '0',
      dislikes: '0',
    };
  }
  submitFeedback = () => {
    db.collection('Feedback').add({
      feedbackBox: this.state.feedbackBox,
      name: this.state.name,
      email: this.state.email,
      date: firebase.firestore.Timestamp.now().toDate(),
    });
    this.setState({
      feedbackBox: '',
      name: '',
      email: '',
    });
    alert('Thank you for submitting your feedback.');
  };
  render() {
    return (
      <View style={styles.allText}>
        <MyHeader title="Feedback" navigation ={this.props.navigation}/>
        <TextInput
          style={styles.feedbackBox}
          placeholder="Write your feedback or opinion here."
          value={this.state.feedbackBox}
          onChangeText={(text) => this.setState({ feedbackBox: text })}
        />

        <TextInput
          style={styles.authorBox}
          placeholder="Write your e-mail id here."
          keyboardType="email-address"
          value={this.state.email}
          onChangeText={(text) => this.setState({ email: text })}
        />

        <TextInput
          style={styles.authorBox}
          placeholder="Write your name here."
          value={this.state.name}
          onChangeText={(text) => this.setState({ name: text })}
        />
        <TouchableOpacity onPress={this.submitFeedback} style = {styles.Button}>
          <Text style = {styles.ButtonText}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  allText: {
    flex: 1,
    backgroundColor: 'white',
  },
  feedbackBox: {
    width: '90%',
    height: '40%',
    backgroundColor: 'white',
    border: 'dashed',
    padding: 17,
    marginLeft: 20,
    marginTop: 25,
    borderRadius: 10,
    fontSize: 14.5,
    fontWeight: 'bold',
  },
  authorBox: {
    width: '90%',
    height: 20,
    backgroundColor: 'white',
    border: 'dashed',
    padding: 17,
    borderRadius: 10,
    marginLeft: 20,
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
  ButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
    alignSelf: "center",
  },
  Button: {
    backgroundColor: '#ff5722',
    width: 200,
    height: 50,
    marginTop: 40,
    textAlign: 'center',
    alignSelf: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
});