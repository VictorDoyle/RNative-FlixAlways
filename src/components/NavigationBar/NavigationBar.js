import React, { Component, useEffect } from 'react';
import { StyleSheet, View } from "react-native";
import { useLocation, Route, Link } from "react-router-native";
import { Container, Title, Header, Left, Body, Right, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';


function NavigationBar({match}) {
    let location = useLocation();

    useEffect(() => {
       
      },[ location ]);


    return(
        <>
    <Container>
    <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title> { location ? location.pathname : null }</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
        <Content />
        <Footer>
          <FooterTab>
              <Link to={"/home"}>
                <Button vertical>
                <Icon name="home" />
                <Text>Home</Text>
                </Button>
              </Link>
            <Link to={"/movies"}>
                <Button badge vertical>
                <Badge><Text>26</Text></Badge>
                <Icon name="film" />
                <Text>Movies</Text>
                </Button>
            </Link>
            <Link to="/profile/:id">
                <Button vertical>
                <Icon name="person" />
                <Text>Profile</Text>
                </Button>
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