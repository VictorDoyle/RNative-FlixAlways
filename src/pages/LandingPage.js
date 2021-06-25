import React, { useEffect, useState } from "react";
import { StyleSheet, View, SafeAreaView} from "react-native";
import { Form, Item, Input, Text, Button, Content} from "native-base"
import { useHistory } from "react-router-native";
import { SIGNUP, LOGIN } from "../graphql/operations";
import { useMutation } from "@apollo/client";
/* cookies */
/* import {Cookie} from 'react-native-cookie';

 */
function LandingPage() {
  /* FIXME: recoil not available for native */
  const [user, setUser] = useState();
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


  useEffect(() => {
    if (!loadingL && dataL) {
      const { signinUser } = dataL;
      setUser(signinUser);
     /*  Cookie.set("", "uid", `Bearer ${signinUser.token}`).then(() => console.log('=============Cookie Successfuly Set =============')); */
      handleClick("home");
    }
  }, [dataL]);

  useEffect(() => {
    if (!loadingS && dataS) {
      setValidated(true);
    }
  }, [dataL]);

  const submitHandlerLogin = async (e) => {

    await login({
      variables: {
        signinUserEmail: email,
        signinUserPassword: password,
      },
    });
  };

  const submitHandlerSignup = async (e) => {
    await signup({
      variables: {
        signupUserSignupInput: {
          email: email,
          username: username,
          password: password,
        },
      },
    });
    if (!loadingS && dataS) {
      setIsNewUser(false);
    }
  };

  if (loadingS) return "Loading...";


    return(
        <>
        <SafeAreaView>

        <View style={styles.mainLandingContent}>
          <Text style={styles.mainLandingHeadersOne}> Welcome To FlixAlways </Text>
          <Text style={styles.mainLandingHeadersTwo}> A Movie Finder App To Save You Time </Text>

          {/* login/signup section */}
          <Button style={styles.landingButtons} onPress={()=>{isLoggingIn === true ? setIsLoggingIn(false) : setIsLoggingIn(true)}}>
            <Text>Login</Text>
          </Button>

          <Button style={styles.landingButtons}  onPress={() => {isSigningUp === true ? setisSigningUp(false) : setisSigningUp(true)}}>
            <Text>Sign Up</Text>
          </Button>


          <Button style={styles.landingButtons}  onPress={() => handleClick("learn-more")}>
            <Text>Learn More About FlixAlways</Text>
          </Button>

          {/* show login form */}
           
          {isLoggingIn ? <>
          <>
          <Form>
            <Item>
              <Input placeholder="Username" />
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>
            <Button onPress={submitHandlerLogin}>
              <Text> Login </Text>
            </Button>
          </Form> 
          </>
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
            <Button onPress={submitHandlerSignup} >
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