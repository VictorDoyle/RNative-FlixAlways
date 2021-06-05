import React from "react";
import { StyleSheet, Text, View, SafeAreaView  } from "react-native";
/* vendor styling */
import { Container, Header, Left, Body, Subtitle, Title } from 'native-base';
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
            <MovieCard/>
            {/* Main Content END */}
        </SafeAreaView>
        </>
    )
};

export default Homepage