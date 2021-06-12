import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView  } from "react-native";
/* vendor styling */
import { Container, Header, Left, Body, Subtitle, Title, Grid, Col } from 'native-base';
/* components */
import HeroBanner from "../components/HeroBanner/HeroBanner.js"
import MovieCard from "../components/MovieCard/MovieCard.js";
import Loader from "../components/Loader/Loader.js";
import Infinite from "../components/Infinite/Infinite.js";
/* GQL */
import { useQuery } from "@apollo/client";
import { ALLMOVIES } from "../graphql/operations";


function Homepage() {
    const [allMovies, setAllMovies] = useState([]);
    const [take] = useState(10);
    const [cursor, setCursor] = useState(1);
    const [skip, setSkip] = useState(0);

    
    const {
        loading: loadingAll,
        data: dataAll,
        fetchMore,
      } = useQuery(ALLMOVIES, {
        variables: {
          allMoviesTake: take,
          allMoviesSkip: skip,
          allMoviesMyCursor: cursor,
        },
      });

      useEffect(() => {
        if (!loadingAll && dataAll) {
          setAllMovies(dataAll.allMovies);
        }
    
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [loadingAll, dataAll]);

      const bigFetch = () => {
        fetchMore(
          {
            variables: {
              allMoviesMyCursor: allMovies.length - 1,
            },
          },
          setCursor(allMovies[allMovies.length - 1].categoryId),
          setSkip(2),
        );
      };




    return(
        <>
        <SafeAreaView>
            {/* Top Section */}
        <HeroBanner/>
            <Title>Welcome To FlixAlways</Title>
            <Subtitle>You'll Find Every Movie You Haven't Watched Here</Subtitle>
            {/* Top Section End */}


            {/* Movie/Main Content Section */}
            <ScrollView style={styles.homepageScrollTotal}>

            
               <Title style={{textAlign: "left"}}>LATEST MOVIES </Title>
            <ScrollView style={styles.movieCardScrollView} horizontal={true}>
            <Grid>
                <Col style={styles.movieCardContainer}>
                {allMovies.length > 0 ? (
                        <Infinite allMovies={allMovies}/>
                    ) : (
                        <Loader />
                    )}
           
                </Col>
            </Grid>
            </ScrollView>

            <Title style={{textAlign: "left"}}>HORROR COLLECTION </Title>
            <ScrollView style={styles.movieCardScrollView} horizontal={true} >
            <Grid>
                <Col style={styles.movieCardContainer}>
            <MovieCard style={styles.movieCardGrid}/>
            <MovieCard style={styles.movieCardGrid}/>
            <MovieCard style={styles.movieCardGrid}/>
            <MovieCard style={styles.movieCardGrid}/>
            <MovieCard style={styles.movieCardGrid}/>
            <MovieCard style={styles.movieCardGrid}/>
           
                </Col>
            </Grid>
            </ScrollView>
            {/* Main Content END */}
            </ScrollView>
        </SafeAreaView>
        </>
    )
};

const styles = StyleSheet.create({
    movieCardScrollView: {
        margin: 5,
    },
    movieCardContainer: {
        flexDirection: "row"
    },
    movieCardGrid: {
       flex: 1,
    },
    homepageScrollTotal: {
        maxHeight: "95%",
    }
})

export default Homepage