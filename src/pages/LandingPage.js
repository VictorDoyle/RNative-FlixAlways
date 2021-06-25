import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView} from "react-native";
import { Form, Item, Input, Container, Content, Text, Button} from "native-base"
import { NativeRouter, Route, Link, useHistory } from "react-router-native";
import { SIGNUP, LOGIN } from "../graphql/operations";
import { useMutation } from "@apollo/client";
function LandingPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const history = useHistory();
  function handleClick(path) {
    history.push(path);
  }

  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const [isSigningUp, setisSigningUp] = useState(false);

  const [login, { loading: loadingL, error: errorL, data: dataL }] =
  useMutation(LOGIN);
  const [signup, { loading: loadingS, error: errorS, data: dataS }] =
  useMutation(SIGNUP);


  const submitHandlerLogin = async (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    await login({
      variables: {
        signinUserEmail: email,
        signinUserPassword: password,
      },
    });
  };

  const submitHandlerSignup = async (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    await signup({
      variables: {
        signupUserSignupInput: {
          email: email,
          username: username,
          password: password,
        },
      },
    });}

    return(
        <>
        <SafeAreaView>

        <View style={styles.mainLandingContent}>
          <Text style={styles.mainLandingHeadersOne}> Welcome To FlixAlways </Text>
          <Text style={styles.mainLandingHeadersTwo}> A Movie Finder App To Save You Time </Text>

          {/* login/signup section */}
          <Button style={styles.landingButtons} onPress={()=>{setIsLoggingIn(true)}}>
            <Text>Login</Text>
          </Button>

          <Button style={styles.landingButtons}  onPress={() => {setisSigningUp(true)}}>
            <Text>Sign Up</Text>
          </Button>


          <Button style={styles.landingButtons}  onPress={() => handleClick("learn-more")}>
            <Text>Learn More About FlixAlways</Text>
          </Button>

          {/* show login form */}
           
          {isLoggingIn === true ? <>
          <Form>
            <Item>
              <Input placeholder="Username" />
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>
            <Button onPress={() => submitHandlerLogin, setIsLoggingIn(false)}>
              <Text> Login </Text>
            </Button>
          </Form> 
          </> :
          <>
          </>}

          {/* show signup form */}

          {isSigningUp === true ? <>
          <Form >
          <Item>
              <Input placeholder="Email"  onChange={(e) => setEmail(e.target.value)}/>
            </Item>
            <Item>
              <Input placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
            </Item>
            <Item last>
              <Input placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            </Item>
            <Button onPress={() => submitHandlerSignup(), setisSigningUp(false)} >
              <Text> Register </Text>
            </Button>
          </Form> 
          </> :
          <>
          </>}


        </View>
        </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    mainLandingHeadersOne: {
      marginTop: 50,
      fontSize: 30,
      textAlign: "center",
    },
    mainLandingHeadersTwo: {
      marginTop: 25,
      fontSize: 25,
      textAlign: "center",
      
    },
    mainLandingContent: {
      marginLeft: "auto",
      marginRight: "auto",
    },
    landingButtons: {
      margin: 15,
      marginLeft: "auto",
      marginRight: "auto",
    }
    
  });

export default LandingPage