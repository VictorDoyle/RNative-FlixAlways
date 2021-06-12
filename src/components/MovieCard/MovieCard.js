import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import ActionButtons from '../ActionButtons/ActionButtons';

function MovieCard(props) {
    let Image_Http_URL ={ uri: `https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${props.image}`};

    return(
        <>                   
                    <Card style={styles.movieCardMain}>
                        <CardItem cardBody>
                        <Image source={Image_Http_URL} style={{height: 200, width: null, flex: 1}} style={styles.movieImageCard}/>
                        </CardItem>
                        < >
                       <ActionButtons/>
                        </>
                    </Card>
                 
        </>
    )
}

const styles = StyleSheet.create({
    movieCardMain: {
      width: 160,
      borderRadius: 5,
    },
    movieImageCard: {
        height: 250,
        width: 160,
        borderRadius: 5,
    },
    

    
    
  });


export default MovieCard