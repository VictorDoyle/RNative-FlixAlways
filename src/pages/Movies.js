import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import InfiniteRecommendations from "../components/Infinite/InfiniteRecommendations";
function Movies() {
    return(
        <>
        <SafeAreaView>

        <Text> Movie Page</Text>
        <InfiniteRecommendations />
        </SafeAreaView>
        </>
    )
}

export default Movies