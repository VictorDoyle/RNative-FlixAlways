import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView  } from "react-native";
/* vendor styling */
import { Container, Header, Left, Body, Subtitle, Title, Grid, Col } from 'native-base';
/* components */
import HeroBanner from "../components/HeroBanner/HeroBanner.js"
import MovieCard from "../components/MovieCard/MovieCard.js";


function Homepage() {
    return(
        <>
        <SafeAreaView>
            {/* Top Section */}
        <HeroBanner/>
            <Title>Welcome To FlixAlways</Title>
            <Subtitle>You'll Find Every Movie You Haven't Watched Here</Subtitle>
            {/* Top Section End */}


            {/* Movie/Main Content Section */}
            <ScrollView style={styles.homepageScrollTotal}>

            
               <Title style={{textAlign: "left"}}>LATEST MOVIES </Title>
            <ScrollView style={styles.movieCardScrollView} horizontal={true}>
            <Grid>
                <Col style={styles.movieCardContainer}>
            <MovieCard style={styles.movieCardGrid}/>
            <MovieCard style={styles.movieCardGrid}/>
            <MovieCard style={styles.movieCardGrid}/>
            <MovieCard style={styles.movieCardGrid}/>
            <MovieCard style={styles.movieCardGrid}/>
            <MovieCard style={styles.movieCardGrid}/>
           
                </Col>
            </Grid>
            </ScrollView>

            <Title style={{textAlign: "left"}}>HORROR COLLECTION </Title>
            <ScrollView style={styles.movieCardScrollView} horizontal={true} >
            <Grid>
                <Col style={styles.movieCardContainer}>
            <MovieCard style={styles.movieCardGrid}/>
            <MovieCard style={styles.movieCardGrid}/>
            <MovieCard style={styles.movieCardGrid}/>
            <MovieCard style={styles.movieCardGrid}/>
            <MovieCard style={styles.movieCardGrid}/>
            <MovieCard style={styles.movieCardGrid}/>
           
                </Col>
            </Grid>
            </ScrollView>
            {/* Main Content END */}
            </ScrollView>
        </SafeAreaView>
        </>
    )
};

const styles = StyleSheet.create({
    movieCardScrollView: {
        margin: 5,
    },
    movieCardContainer: {
        flexDirection: "row"
    },
    movieCardGrid: {
       flex: 1,
    },
    homepageScrollTotal: {
        maxHeight: "95%",
    }
})

export default Homepage