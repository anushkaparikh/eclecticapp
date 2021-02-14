import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
} from 'react-native';

TouchableOpacity.defaultProps = {activeOpacity: 0.8};

const SignUp = ({navigation}) => {
  const [data, setData] = React.useState({
    name: '',
    username: '',
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
  });
  const nameInputChange = (val) => {
    if (val.length > 0) {
      setData({
        ...data,
        name: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        name: val,
        check_textInputChange: false,
      });
    }
  };
  const usernameInputChange = (val) => {
    if (val.length > 0) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
      });
    }
  };
  const emailInputChange = (val) => {
    if (val.length > 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };
  const handlePassword = (val) => {
    setData({
      ...data,
      password: val,
    });
  };
  const homePressHandler = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.login_screenContainer}>
      <Text style={styles.login_text}>Welcome!</Text>
      <View style={styles.login_container}>
        <ScrollView>
          <Text style={styles.login_small_text}>Full Name</Text>
          <View style={styles.login_action}>
            <TextInput
              placeholder="Your Name"
              style={styles.login_input}
              onChangeText={(val) => nameInputChange(val)}
            />
          </View>
          <Text style={styles.login_small_text}>Username</Text>
          <View style={styles.login_action}>
            <TextInput
              placeholder="Your Username"
              style={styles.login_input}
              onChangeText={(val) => usernameInputChange(val)}
            />
          </View>
          <Text style={styles.login_small_text}>Email</Text>
          <View style={styles.login_action}>
            <TextInput
              placeholder="Your Email"
              style={styles.login_input}
              onChangeText={(val) => emailInputChange(val)}
            />
          </View>
          <Text style={styles.login_small_text}>Password</Text>
          <View style={styles.login_action}>
            <TextInput
              placeholder="Your Password"
              style={styles.login_input}
              secureTextEntry={data.secureTextEntry ? true : false}
              onChangeText={(val) => handlePassword(val)}
            />
          </View>
          <Text style={styles.login_small_text}>Confirm Password</Text>
          <View style={styles.login_action}>
            <TextInput
              placeholder="Your Password"
              style={styles.login_input}
              secureTextEntry={data.secureTextEntry ? true : false}
              onChangeText={(val) => handlePassword(val)}
            />
          </View>
          <TouchableOpacity
            onPress={homePressHandler}
            style={styles.login_button}>
            <Text style={styles.login_button_text}>Sign Up</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  login_screenContainer: {
    flex: 1,
    backgroundColor: '#E3DDD9',
  },
  login_text: {
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    top: 90,
    left: 20,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000',
  },
  login_container: {
    backgroundColor: '#D1C5BC',
    width: '100%',
    height: '80%',
    borderRadius: 20,
    position: 'absolute',
    bottom: 0,
  },
  login_small_text: {
    justifyContent: 'center',
    position: 'relative',
    paddingLeft: 20,
    paddingTop: 30,
    fontSize: 24,
    color: '#000000',
    marginVertical: 10,
  },
  login_action: {
    alignSelf: 'center',
    width: '90%',
    flexDirection: 'row',
    marginTop: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#AEABAB',
    height: 20,
  },
  login_input: {
    flex: 1,
    color: '#000',
    width: '100%',
    paddingLeft: 20,
    position: 'relative',
    fontSize: 18,
  },
  login_touch_text: {
    position: 'relative',
    fontSize: 20,
    paddingLeft: 20,
    color: '#000',
    marginVertical: 5,
    fontWeight: 'bold',
  },
  login_button: {
    alignSelf: 'center',
    width: '90%',
    flexDirection: 'column',
    marginTop: 15,
    padding: 2,
    justifyContent: 'center',
    position: 'relative',
    backgroundColor: '#AEABAB',
  },
  login_button_text: {
    alignSelf: 'center',
    position: 'relative',
    fontSize: 20,
    color: '#FFF',
    marginVertical: 5,
  },
});

export default SignUp;
