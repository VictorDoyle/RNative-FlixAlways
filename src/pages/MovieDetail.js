import React from "react";
import { StyleSheet,SafeAreaView, Text, View } from "react-native";

function MovieDetail() {
    return(
        <>
        <SafeAreaView>
        <HeroBanner headerTitle= {"Movie.title"}/>
        <Text> Movie Detail Page</Text>
        </SafeAreaView>
        </>
    )
}

export default MovieDetail