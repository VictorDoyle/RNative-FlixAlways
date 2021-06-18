import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
/* imports */
import ProfileMovieList from "../components/Profile/ProfileMovieList";
import EditProfile from "../components/Profile/EditProfile";

import { Subtitle, Title} from "native-base";
import UserMovieList from "../components/Profile/UserMovieList";

function Profile() {


    return(
        <>
        <SafeAreaView>
        
        <Title> Hey "username here"!</Title>
            <Subtitle>All Your Liked, Disliked, Seen and Saved Movies Can Be Found Here</Subtitle>
           
       
      
            <Title> Your Profile</Title>
            <EditProfile/>



            <Title> Your Movies</Title>
                <ProfileMovieList/>
            <Title> Your Movie Lists</Title>
            <ScrollView>
                <UserMovieList/>
            </ScrollView>
        </SafeAreaView>
        </>
    )
}

export default Profile