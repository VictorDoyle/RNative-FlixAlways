import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import HeroBanner from "../components/HeroBanner/HeroBanner";

function Homepage() {
    return(
        <>
        <SafeAreaView>
        <HeroBanner headerTitle= {"Home"}/>
        <Text> Homepage Here </Text>
        </SafeAreaView>
        </>
    )
}

export default Homepage