import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView} from "react-native";
import { Grid, Col, Header, Title } from "native-base";
import { useQuery } from "@apollo/client";
import { DISLIKEDMOVIES } from "../graphql/operations.js";
import MovieCard from "../components/MovieCard/MovieCard.js";

function DislikedMovies() {
    const [dislikedMovies, setDislikedMovies] = useState();
    const { loading, error, data } = useQuery(DISLIKEDMOVIES, {
      fetchPolicy: "network-only",
    });
    useEffect(() => {
        if (!loading && data) {
            setDislikedMovies(data);
        }
        if (error) {
          return error;
        }
      }, [loading, data]);

      const Mapper = () => (
        <>
          {dislikedMovies.dislikedMovies.map((movie, i) => (
            <MovieCard {...movie} key={i + 1} style={styles.verticalMovieCard} />
          ))}
        </>
      );

      

    return(
        <>
        <SafeAreaView>

            <Title>
                Movies You've Disliked
            </Title>
            <ScrollView>
                    <Col style={styles.verticalMovieGrid}>
                <MovieCard style={styles.verticalMovieCard}/>
                <MovieCard style={styles.verticalMovieCard} />
                <MovieCard style={styles.verticalMovieCard}/>
                <MovieCard style={styles.verticalMovieCard}/>
                {dislikedMovies ? <Mapper /> : <Text> There Was An Error Getting Your Disliked Movies!</Text>}
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

export default DislikedMovies