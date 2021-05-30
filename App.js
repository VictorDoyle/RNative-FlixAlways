import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";

/* pages */
import LandingPage from "./src/pages/LandingPage.js";
import Homepage from "./src/pages/Homepage.js";
import Movies from "./src/pages/Movies.js";
import Profile from "./src/pages/Profile.js";
import WatchedMovies from "./src/pages/WatchedMovies.js";
import SavedMovies from "./src/pages/SavedMovies.js";
import MovieDetail from "./src/pages/MovieDetail.js";
import NotFound from "./src/pages/NotFound.js";
import NavigationBar from "./src/components/NavigationBar/NavigationBar.js";



function App() {
  return (
    <NativeRouter>
      {/* currentUser && loggedIn ? <NavigationBar/> : null */}
      
      <View style={styles.container}>
        <Route exact path="/" component={LandingPage} />
        <Route path="/home" component={Homepage} />
        <Route path="/movies" component={Movies} />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/movie/:id" component={MovieDetail} />
        <Route path="/watched" component={WatchedMovies} />
        <Route path="/saved" component={SavedMovies} />
        <Route component={NotFound} />
      </View>
      <NavigationBar/>
    </NativeRouter>
  );
}



const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  }
  
});

export default App;
