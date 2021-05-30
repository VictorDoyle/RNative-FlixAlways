import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import HeroBanner from "../components/HeroBanner/HeroBanner";

function Movies() {
    return(
        <>
        <SafeAreaView>
        <HeroBanner headerTitle= {"Movies"}/>
        <Text> Movie Page</Text>
        </SafeAreaView>
        </>
    )
}

export default Movies