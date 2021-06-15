import React from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

function UserMovieList() {
    /* add mapper here for mapping through user lists */
    return(
        <>

        {/* MOVIE LISTS MADE BY THE USER */}
            <List>  
                {/* thumbnail is first movie img or randomized */}
                <ListItem thumbnail>
                <Left>
                    <Thumbnail square source={{ uri: 'Image URL' }} />
                </Left>
                <Body>
                    <Text>Best Horror Movies</Text>
                    <Text note numberOfLines={1}>Your description here</Text>
                </Body>
                <Right>
                    <Button transparent>
                    <Text>View</Text>
                    </Button>
                </Right>
                </ListItem>
            </List>

            <List>  
                {/* thumbnail is first movie img or randomized */}
                <ListItem thumbnail>
                <Left>
                    <Thumbnail square source={{ uri: 'Image URL' }} />
                </Left>
                <Body>
                    <Text>Best Comedies</Text>
                    <Text note numberOfLines={1}>Your description here</Text>
                </Body>
                <Right>
                    <Button transparent>
                    <Text>View</Text>
                    </Button>
                </Right>
                </ListItem>
            </List>

            <List>  
                {/* thumbnail is first movie img or randomized */}
                <ListItem thumbnail>
                <Left>
                    <Thumbnail square source={{ uri: 'Image URL' }} />
                </Left>
                <Body>
                    <Text>Netflix Movies 2 watch</Text>
                    <Text note numberOfLines={1}>Your description here</Text>
                </Body>
                <Right>
                    <Button transparent>
                    <Text>View</Text>
                    </Button>
                </Right>
                </ListItem>
            </List>

         
 

        </>
    )
}


export default UserMovieList


