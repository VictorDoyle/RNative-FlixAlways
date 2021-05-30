import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NativeRouter, Route, Link } from "react-router-native";

function LandingPage() {
    return(
        <>
        <View style={styles.mainLandingContent}>
          <Text style={styles.mainLandingHeadersOne}> Welcome To FlixAlways </Text>
          <Text style={styles.mainLandingHeadersTwo}> A Movie Finder App To Save You Time </Text>
          {/* refactor links into modals here */}
          <Link to="/home" underlayColor="#f0f4f7" >
            <Text>Login</Text>
          </Link>
          {/* add signup modal here */}
          <Link to="/home" underlayColor="#f0f4f7" >
            <Text>Sign Up</Text>
          </Link>
          {/* add modals here */}
          <Link to="/" underlayColor="#f0f4f7" >
            <Text>Learn More About Us</Text>
          </Link>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    mainLandingHeadersOne: {
      marginTop: 50,
      fontSize: 30,
    },
    mainLandingHeadersTwo: {
      marginTop: 25,
      fontSize: 25,
      
    },
    mainLandingContent: {
      marginLeft: "auto",
      marginRight: "auto",
    },
    
  });

export default LandingPage