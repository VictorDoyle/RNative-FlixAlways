import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

function MovieCard() {
    return(
        <>                   
                    <Card style={styles.movieCardMain}>
                        <CardItem cardBody>
                        <Image source={require('./movie1.jpg')} style={{height: 200, width: null, flex: 1}} style={styles.movieImageCard}/>
                        </CardItem>
                        <CardItem>
                        <Left>
                            <Button transparent>
                            <Icon active name="thumbs-up" />
                            <Text>12 Likes</Text>
                            </Button>
                        </Left>
                        <Body>
                            <Button transparent>
                            <Icon active name="chatbubbles" />
                            <Text>4 Comments</Text>
                            </Button>
                        </Body>
                        <Right>
                            <Text>11h ago</Text>
                        </Right>
                        </CardItem>
                    </Card>
                 
        </>
    )
}

const styles = StyleSheet.create({
    movieCardMain: {
      width: 160,
    },
    movieImageCard: {
        height: 250,
        width: 160,
    }
    
    
  });


export default MovieCard