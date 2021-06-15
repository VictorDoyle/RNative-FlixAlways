import React, { Component, useState } from "react";
import { Label, Item, Button, Input, Form, Text } from "native-base";
/* GraphQl */
import { useMutation } from "@apollo/client";
import { UPDATEUSERPROFILE } from "../../graphql/operations";

function EditProfile(){
    const [editProfileActive, seteditProfileActive ] = useState(false);
    /* edit profile states */
    const [firstname, setFirstName] = useState();
    const [lastname, setLastName] = useState();
    const [username, setUserName] = useState();
    const [email, setEmail] = useState();

    /* GQL */
    const [update, { loading, error, data }] = useMutation(UPDATEUSERPROFILE);


    const submitProfileEdit = async (e) => {
        e.preventDefault();
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

    <Button primary block onPress={() => {{editProfileActive === true ? seteditProfileActive(false) : seteditProfileActive(true)}}}>
        <Text> Edit Profile </Text>
    </Button>




        { editProfileActive === true ? 
           <Form>
           <Item stackedLabel>
             <Label onChange={(e) => setFirstName(e.target.value)} >Update Your First Name</Label>
             <Input />
           </Item>
           <Item stackedLabel>
             <Label onChange={(e) => setLastName(e.target.value)} >Update Your Last Name</Label>
             <Input />
           </Item>
           <Item stackedLabel>
             <Label onChange={(e) => setUserName(e.target.value)} >Update Your Username</Label>
             <Input />
           </Item>
           <Item stackedLabel>
             <Label onChange={(e) => setEmail(e.target.value)} >Update Email Address</Label>
             <Input />
           </Item>
           <Item stackedLabel last>
             <Label>Update Password</Label>
             <Input />
           </Item>

           <Button success onPress={()=> {submitProfileEdit}}>
               <Text> Submit </Text>
            </Button>
         </Form>
    : <>
    </>}
       
        
        </>
    )
}


export default EditProfile

