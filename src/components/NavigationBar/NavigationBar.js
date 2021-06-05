import React, { Component, useEffect } from 'react';
import { StyleSheet, View } from "react-native";
import { useLocation,  Link } from "react-router-native";
import { Container, Title, Header, Left, Body, Right, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';


function NavigationBar() {
    let location = useLocation();

    useEffect(() => {
       
      },[ location ]);


    return(
        <>
    <Container>
        <Content />
        <Footer>
          <FooterTab>
              <Link to={"/home"}>
                <>
                <Icon name="home" />
                <Text>Home</Text>
                </>
              </Link>
            <Link to={"/movies"}>
                {/* <Button badge vertical>
                <Badge><Text>26</Text></Badge>
                <Icon name="film" />
                <Text>Movies</Text>
                </Button> */}
                
                <Text>Movies</Text>
            </Link>
            <Link to="/profile/:id">
              {/*   <Button vertical>
                <Icon name="person" />
                <Text>Profile</Text>
                </Button> */}
                <Text>Profile</Text>
            </Link>
          </FooterTab>
        </Footer>
      </Container>
        </>
    )
}


/* const styles = StyleSheet.create({

}) */

export default NavigationBar