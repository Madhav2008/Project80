import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
import MyHeader from '../components/MyHeader';

export default class WelcomeScreen extends React.Component {
   render() {
    return (
     <View style={{ flex: 1, backgroundColor: 'white' }}>
        <MyHeader title="Home" navigation ={this.props.navigation}/>
        <Text style={styles.intro}>
          In the age of the internet, everyone is connected with each other
          using internet and it is easy to share information with everyone. What
          if we could share our physical belongings just as easily as we share
          information! So, I am making a Barter System App in which till now I
          have created some tabs in which users can request or donate some item
          or they can give me feedback. Click on different tabs to see the app.
          Don't forgot to give me the feedback.
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  intro: {
    fontFamily: 'Footlight Mt Light',
    marginTop: 30,
    margin: 10,
    padding: 5,
    fontSize: 20,
  },
});