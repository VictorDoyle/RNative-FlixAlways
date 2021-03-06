import React from 'react';
import { Switch, Route } from "react-router-native";
/* page imports*/
import LandingPage from "../pages/LandingPage.js";
import Homepage from "../pages/Homepage.js";
import Movies from "../pages/Movies.js";
import Profile from "../pages/Profile.js";
import WatchedMovies from "../pages/WatchedMovies.js";
import SavedMovies from "../pages/SavedMovies.js";
import MovieDetail from "../pages/MovieDetail.js";
import DislikedMovies from '../pages/DislikedMovies.js';
import LikedMovies from "../pages/LikedMovies.js";
import LearnMore from '../pages/LearnMore.js';

const routes = (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/home" component={Homepage} />
    <Route path="/movies" component={Movies} />
    <Route path="/profile/:id" component={Profile} />
    <Route path="/movie/:id" component={MovieDetail} />
    <Route path="/watched" component={WatchedMovies} />
    <Route path="/saved" component={SavedMovies} />
    <Route path="/liked" component={LikedMovies} />
    <Route path="/disliked" component={DislikedMovies} />
    <Route path="/learn-more" component={LearnMore} />
  </Switch>
);

export default routes