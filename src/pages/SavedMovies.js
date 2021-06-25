import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView} from "react-native";
import { Grid, Col, Header, Title } from "native-base";
import { useQuery } from "@apollo/client";
import { SAVEDMOVIES } from "../graphql/operations.js";
import MovieCard from "../components/MovieCard/MovieCard.js";

function SavedMovies() {
    const [savedMovies, setSavedMovies] = useState();
    const { loading, error, data } = useQuery(SAVEDMOVIES, {
      fetchPolicy: "network-only",
    });
    useEffect(() => {
        if (!loading && data) {
          setSavedMovies(data);
        }
        if (error) {
          return error;
        }
      }, [loading, data]);

      const Mapper = () => (
        <>
          {savedMovies.savedMovies.map((movie, i) => (
            <MovieCard {...movie} key={i + 1} />
          ))}
        </>
      );

      

    return(
        <>
        <SafeAreaView>

            <Title>
                Your Saved Movies
            </Title>
            <ScrollView>
            <Col style={styles.verticalMovieGrid}>
            <MovieCard style={styles.verticalMovieCard}/>
            <MovieCard style={styles.verticalMovieCard} />
            <MovieCard style={styles.verticalMovieCard}/>
            <MovieCard style={styles.verticalMovieCard}/>
            {savedMovies ? <Mapper /> : <Text> There Was An Error Getting Your Saved Movies!</Text>}
                </Col>
            </ScrollView>

           
        </SafeAreaView>
     
        </>
    )
}


const styles = StyleSheet.create({
    verticalMovieGrid: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
    },
  
})

export default SavedMovies