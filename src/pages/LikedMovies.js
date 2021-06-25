import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView} from "react-native";
import { Grid, Col, Header, Title } from "native-base";
import { useQuery } from "@apollo/client";
import { LIKEDMOVIES } from "../graphql/operations.js";
import MovieCard from "../components/MovieCard/MovieCard.js";

function LikedMovies() {
    const [likedMovies, setLikedMovies] = useState();
    const { loading, error, data } = useQuery(LIKEDMOVIES, {
      fetchPolicy: "network-only",
    });
    useEffect(() => {
        if (!loading && data) {
            setLikedMovies(data);
        }
        if (error) {
          return error;
        }
      }, [loading, data]);

      const Mapper = () => (
        <>
          {likedMovies.likedMovies.map((movie, i) => (
            <MovieCard {...movie} key={i + 1} style={styles.verticalMovieCard} />
          ))}
        </>
      );

      

    return(
        <>
        <SafeAreaView>

            <Title>
                Movies You've Liked
            </Title>
            <ScrollView>
                    <Col style={styles.verticalMovieGrid}>
                <MovieCard style={styles.verticalMovieCard}/>
                <MovieCard style={styles.verticalMovieCard} />
                <MovieCard style={styles.verticalMovieCard}/>
                <MovieCard style={styles.verticalMovieCard}/>
                {likedMovies ? <Mapper /> : <Text> There Was An Error Getting Your Liked Movies!</Text>}
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

export default LikedMovies