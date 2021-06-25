import React, { Component, useEffect } from 'react';
import { StyleSheet, View } from "react-native";
import { useHistory } from "react-router-native";
import { Container, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';


function NavigationBar() {
  const history = useHistory();
  let counter = 0;

  function handleClick(path) {
    history.push(path);
    counter++;
  }

  useEffect(()=> {
    console.log("refreshed")
  }, [counter])



    return(
        <>
    <Container>
        <Content />
        <Footer>
          <FooterTab>
                <Button vertical onPress={() => handleClick("home")}>
                <Icon name="home" />
                <Text>Home</Text>
                </Button>

                <Button badge vertical onPress={() => handleClick("movies")}>
                <Badge><Text>26</Text></Badge>
                <Icon name="film" />
                <Text>Movies</Text>
                </Button>
             
                



                <Button vertical onPress={() => handleClick("profile/:id")}>
                <Icon name="person" />
                <Text>Profile</Text>
                </Button>

          </FooterTab>
        </Footer>
      </Container>
        </>
    )
}


/* const styles = StyleSheet.create({

}) */

export default NavigationBar