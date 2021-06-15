import React, { useState } from 'react';
import { Container, Text, Item, Input, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { Link } from "react-router-native";

function HeroBanner(props, {history}) {
  const [isHidden, setIsHidden] = useState(true)

    return(
        <>
        
        <Header transparent>
          {/* if history.props has back[0] or past, show below */}
          {/* <Left>
            <Button transparent>
              <Icon name='arrow-back'/>
            </Button>
          </Left> */}
          <Body>
            <Title>{props.headerTitle}</Title>
          </Body>
          <Right>
            
            {/* SearchBar */}
            {isHidden === true ? 
              <Button transparent>
              <Icon name='search' onPress={() => {setIsHidden(false)}}/>
            </Button>
                :
                < >
                <Item>
                  <Icon name="ios-search" />
                  <Input placeholder="Search" />
                  <Icon name="ios-people" />
                </Item>
                <Button transparent>
                  <Text>Search</Text>
                </Button>
              </>
              
              }
            
            {/* send to Liked Movies */}
            <Button transparent>
              <Link to="/watched" underlayColor="#f0f4f7" >  
                  <Icon name="heart"/>
              </Link>
            </Button>
            {/* Send To App Tutorial */}
            <Button transparent>
              <Icon name='help-circle' />
            </Button>
          </Right>
        </Header>
    
        </>
    )
}

export default HeroBanner