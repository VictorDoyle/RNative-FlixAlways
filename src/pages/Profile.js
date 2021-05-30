import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import HeroBanner from "../components/HeroBanner/HeroBanner";

function Profile() {
    return(
        <>
        <SafeAreaView>
       
        <HeroBanner headerTitle= {"User.username"}/>
            <Text>Profile Page</Text>
        </SafeAreaView>
        </>
    )
}

export default Profile