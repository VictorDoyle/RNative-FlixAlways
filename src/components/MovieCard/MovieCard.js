import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import ActionButtons from '../ActionButtons/ActionButtons';

function MovieCard() {
    return(
        <>                   
                    <Card style={styles.movieCardMain}>
                        <CardItem cardBody>
                        <Image source={require('./movie1.jpg')} style={{height: 200, width: null, flex: 1}} style={styles.movieImageCard}/>
                        </CardItem>
                        <CardItem >
                       <ActionButtons/>
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
    },
    

    
    
  });


export default MovieCard