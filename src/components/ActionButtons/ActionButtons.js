import React, { Component, useState } from 'react';
import {StyleSheet} from 'react-native';
import { Container, Header, View, Button, Icon, Fab } from 'native-base';


function ActionButtons() {
    const [isActive, setIsActive] = useState(false);

    return(
        <>
           <Fab
            active={isActive}
            direction="up"
            containerStyle={{ }}
            style={styles.actionButtonContainer}
            /* position="bottomRight" */
            onPress={() => {isActive === false ? setIsActive(true) : setIsActive(false)}}>
            <Icon name="ellipsis-vertical" />
            <Button style={styles.saveButton}>
              <Icon name="bookmark" />
            </Button>
            <Button style={styles.likeButton}>
              <Icon name="thumbs-up" />
            </Button>
            <Button style={styles.dislikeButton}>
              <Icon name="thumbs-down" />
            </Button>
            <Button style={styles.watchedButton}>
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
        right: -15,
    },
    saveButton: {
        right: -15,
        backgroundColor: '#e6b800',
    },
    likeButton: {
        right: -15,
        backgroundColor: '#34A34F',
    },
    dislikeButton: {
        backgroundColor: '#DD5144',
        right: -15,
    },
    watchedButton: {
        right: -15,
        backgroundColor: 'grey',
        
    },

    
  });

export default ActionButtons
