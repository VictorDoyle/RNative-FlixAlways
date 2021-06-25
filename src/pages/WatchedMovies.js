import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView} from "react-native";
import { Grid, Col, Header, Title } from "native-base";
import { useQuery } from "@apollo/client";
import { WATCHEDMOVIES } from "../graphql/operations.js";
import MovieCard from "../components/MovieCard/MovieCard.js";

function WatchedMovies() {
    const [watchedMovies, setWatchedMovies] = useState();
    const { loading, error, data } = useQuery(WATCHEDMOVIES, {
      fetchPolicy: "network-only",
    });
    
    useEffect(() => {
        if (!loading && data) {
            setWatchedMovies(data);
        }
        if (error) {
          return error;
        }
      }, [loading, data]);

      const Mapper = () => (
        <>
          {watchedMovies.watchedMovies.map((movie, i) => (
            <MovieCard {...movie} key={i + 1} />
          ))}
        </>
      );

      

    return(
        <>
        <SafeAreaView>

            <Title>
                Movies You've Watched
            </Title>
            <ScrollView>
            {watchedMovies ? <Mapper /> : <Text> There Was An Error Getting Your Watched Movies!</Text>}
            </ScrollView>

           
        </SafeAreaView>
     
        </>
    )
}

export default WatchedMovies