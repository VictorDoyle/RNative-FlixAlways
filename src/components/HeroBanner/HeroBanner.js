import React, { useState } from 'react';
import { Container, Text, Item, Input, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

function HeroBanner(props, {history}) {
  const [isHidden, setIsHidden] = useState(true)

    return(
        <>
        
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' onPress={() => {history.push(0)}}/>
            </Button>
          </Left>
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
              <Icon name='heart' />
            </Button>
            {/* Send To App Tutorial */}
            <Button transparent>
              <Icon name='more' />
            </Button>
          </Right>
        </Header>
    
        </>
    )
}

export default HeroBanner