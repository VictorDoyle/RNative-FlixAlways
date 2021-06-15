import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
/* imports */
import ProfileMovieList from "../components/Profile/ProfileMovieList";
/* GraphQl */
import { useMutation } from "@apollo/client";
import { UPDATEUSERPROFILE } from "../graphql/operations";
import { Subtitle, Title} from "native-base";
import UserMovieList from "../components/Profile/UserMovieList";

function Profile() {
    const [update, { loading, error, data }] = useMutation(UPDATEUSERPROFILE);
    const [firstname, setFirstName] = useState();
    const [lastname, setLastName] = useState();
    const [username, setUserName] = useState();
    const [email, setEmail] = useState();
  

  const submitProfileEdit = async () => {
    await update({
      variables: {
        updateUserFirstname: firstname,
        updateUserLastname: lastname,
        updateUserUsername: username,
        updateUserEmail: email,
      },
    });
  };

    return(
        <>
        <SafeAreaView>
        <Title> Hey "{username}"!</Title>
            <Subtitle>All Your Liked, Disliked, Seen and Saved Movies Can Be Found Here</Subtitle>
           
       
      
            <Title> Your Profile</Title>
            <Text> Add buttons to edit profile info here</Text>



            <Title> Your Movies</Title>
            <ProfileMovieList/>
            <Title> Your Movie Lists</Title>
            <UserMovieList/>
        </SafeAreaView>
        </>
    )
}

export default Profile