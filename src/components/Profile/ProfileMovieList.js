import React from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

function ProfileMovieList() {
    /* add mapper here for mapping through user lists */
    return(
        <>
        {/* SAVED MOVIES */}
            <List>  
                {/* thumbnail is first movie img or randomized */}
                <ListItem thumbnail>
                <Left>
                    <Thumbnail square source={{ uri: 'Image URL' }} />
                </Left>
                <Body>
                    <Text>Saved Movies</Text>
                    <Text note numberOfLines={1}>Every Movie You've Saved</Text>
                </Body>
                <Right>
                    <Button transparent>
                    <Text>View</Text>
                    </Button>
                </Right>
                </ListItem>
            </List>

            {/* WATCHED MOVIES */}

            <List>  
                {/* thumbnail is first movie img or randomized */}
                <ListItem thumbnail>
                <Left>
                    <Thumbnail square source={{ uri: 'Image URL' }} />
                </Left>
                <Body>
                    <Text>Watched Movies</Text>
                    <Text note numberOfLines={1}>Every Movie You've Watched</Text>
                </Body>
                <Right>
                    <Button transparent>
                    <Text>View</Text>
                    </Button>
                </Right>
                </ListItem>
            </List>

            {/* DISLIKED MOVIES */}

            
            <List>  
                {/* thumbnail is first movie img or randomized */}
                <ListItem thumbnail>
                <Left>
                    <Thumbnail square source={{ uri: 'Image URL' }} />
                </Left>
                <Body>
                    <Text>Disliked Movies</Text>
                    <Text note numberOfLines={1}>Movies You've Disliked</Text>
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


export default ProfileMovieList

