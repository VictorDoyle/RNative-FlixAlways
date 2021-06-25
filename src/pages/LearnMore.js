import React from "react";
import { StyleSheet,SafeAreaView, View } from "react-native";
import { Container, Header, Left, Body, Right, Button, Icon, Segment, Content, Text } from 'native-base';

function LearnMore() {
    return(
        <>
        <SafeAreaView>
  
            <Header hasSegment>
            <Left>
                <Button transparent>
                <Icon name="arrow-back" />
                </Button>
            </Left>
            <Body>
                <Segment>
                <Button first><Text>Puppies</Text></Button>
                <Button last active><Text>Cubs</Text></Button>
                </Segment>
            </Body>
            <Right>
                <Button transparent>
                <Icon name="search" />
                </Button>
            </Right>
            </Header>
            <Content padder>
            <Text>Awesome segment</Text>
            </Content>
       
        </SafeAreaView>
        </>
    )
}

export default LearnMore