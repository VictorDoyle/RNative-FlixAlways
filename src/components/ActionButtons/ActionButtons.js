import React, { Component, useState } from 'react';
import {StyleSheet} from 'react-native';
import { Container, Header, View, Toast, Text, Button, Icon, Fab } from 'native-base';
import { useMutation } from "@apollo/client";
import { USERUPDATE } from "../../graphql/operations";

function ActionButtons(props) {
    const [update, { loading, error }] = useMutation(USERUPDATE);
    const [isActive, setIsActive] = useState(false);


    console.log(props.id, "PROPS ID")

    const submitLike = async (e) => {
      e.preventDefault();
      await update({
        variables: {
          addMovieToUserMovieId: props.id,
          addMovieToUserLiked: true,
        },
      });
    };
  
    const submitDislike = async (e) => {
      e.preventDefault();
      await update({
        variables: {
          addMovieToUserMovieId: props.id,
          addMovieToUserDisliked: true,
        },
      });
    };
  
    const submitSave = async () => {
      await update({
        variables: {
          addMovieToUserMovieId: props.id,
          addMovieToUserSaved: true,
        },
      });
    };

    const submitWatched = async (e) => {
      e.preventDefault();
      await update({
        variables: {
          addMovieToUserMovieId: props.id,
          addMovieToUserWatched: true,
        },
      });
    };

    return(
        <>
           <Fab
            active={isActive}
            direction="up"
            containerStyle={{ right: -5, bottom: 0}}
            style={styles.actionButtonContainer}
            position="bottomRight"
            onPress={() => {isActive === false ? setIsActive(true) : setIsActive(false)}}>
            <Icon name="ellipsis-vertical" />
            <Button style={styles.saveButton} onPress={() => {submitSave();
         Toast.show({
          text: 'Movie Saved',
          buttonText: 'Okay',
          duration: 2000
        });        
        setIsActive(false);
          }}>
              <Icon name="bookmark" />
            </Button>
            <Button style={styles.likeButton} onPress={() => {submitLike();
         Toast.show({
          text: 'Movie Liked',
          buttonText: 'Okay',
          duration: 2000
        }); 
        setIsActive(false);
          }}>
              <Icon name="thumbs-up" />
            </Button>
            <Button style={styles.dislikeButton} onPress={() => {submitDislike();
         Toast.show({
          text: 'Movie Disliked',
          buttonText: 'Okay',
          duration: 2000
        });        
        setIsActive(false);
          }}>
              <Icon name="thumbs-down" />
            </Button>
            <Button style={styles.watchedButton} onPress={() => {submitWatched();
         Toast.show({
          text: 'Marked as Watched',
          buttonText: 'Okay',
          duration: 2000
        });        
        setIsActive(false);
          }}>
              <Icon name="eye" />
            </Button>
  
          </Fab>
        </>
    )
}

const styles = StyleSheet.create({
    actionButtonContainer: {
        backgroundColor: '#5067FF',
        width: 40,
        height: 40,
        paddingLeft: 2,
        
    },
    saveButton: {
        backgroundColor: '#e6b800',
    },
    likeButton: {
        backgroundColor: '#34A34F',
    },
    dislikeButton: {
        backgroundColor: '#DD5144',
    },
    watchedButton: {
        backgroundColor: 'grey',
        
    },

    
  });

export default ActionButtons
