import React, { useReducer, useState } from "react";
import { StyleSheet,SafeAreaView, View } from "react-native";
import { Container, Header, Left, Body, Right, Button, Icon, Segment, Content, Text, Title} from 'native-base';
import { useHistory } from "react-router-native";

function LearnMore() {
    const history = useHistory();
    function handleClick(path) {
      history.push(path);
    }

    const [aboutUsActive, setAboutUsActive ] = useState(true);
    const [aboutMoviesActive, setAboutMoviesActive ] = useState(false);
    const [aboutHowActive, setAboutHowActive ] = useState(false);
    const [buttonActiveColor, setButtonActiveColor] = useState()


    return(
        <>
        <SafeAreaView>
            <Header hasSegment>
            <Left>
                <Button transparent>
                <Icon name="arrow-back" onPress={() => handleClick("")}/>
                </Button>
            </Left>
            <Body>
                <Segment>
  
            <Button first onPress={() => {setAboutUsActive === false ? setAboutUsActive(true) : setAboutUsActive(false)}}>
                    <Text>About Us</Text>
                </Button>
                <Button onPress={() => {setAboutMoviesActive === false ? setAboutMoviesActive(true) : setAboutMoviesActive(false)}}><Text>Movies</Text></Button>
                <Button last onPress={() => {setAboutHowActive === false ? setAboutHowActive(true) : setAboutHowActive(false)}}><Text>How It Works</Text></Button>
                </Segment>
            </Body>
            </Header>
       <Content>

           {/* FIRST TAB */}
           {aboutUsActive ? <> 
           <Title> About FlixAlways</Title>
           <Text> We Specialize In Bringing You The Best Movie Recommendations. Whether It's On Your Phone or Computer, We're Here To Help You Find What To Watch Next!</Text>
           </> :
           <>
           </>}

           {/* SECOND TAB */}
           {aboutMoviesActive ? <> 
           <Title> INTERACT WITH EACH MOVIE</Title>
           <Text> Everytime you tell us which movies you've watched, liked, disliked or saved to view later, we'll make better movie recommendations for you. How? By never showing you the same movie recommendations twice!</Text>
           </> :
           <>
           </>}

           {/* THIRD TAB */}
           {aboutHowActive ? <> 
           <Title> How it Works</Title>
           {/* use same as tutorial component here */}
           </> :
           <>
           </>}
       </Content>
        </SafeAreaView>
        </>
    )
}


const styles = StyleSheet.create({
 /*    activeButtonStyling: {
     backgroundColor: 
    }, */
   
    
  });

export default LearnMore