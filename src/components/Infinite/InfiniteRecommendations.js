import React, { useEffect, useState }from "react";
import MovieCard from "../MovieCard/MovieCard";
import { FlatList } from "react-native";

const InfiniteRecommendations = ({
  userMovieRecommendations,
  onLoadMore,
  error,
  removeMovies,
  cursorLength,
  more,
}) => {
    /* Language Filter For Movies */
  const languageFilter = userMovieRecommendations.filter(
    (m) =>
      m.original_language != "hi" &&
      "es" &&
      "pk" &&
      m.title != "Gabriel's Inferno" &&
      m.title != "Gabriel's Inferno Part II" &&
      m.title != "Gabriel's Inferno Part III",
  );

  /* BASE SETUP FOR INFINITE SCROLL WITH FLATLIST */
  const [page, setPage] = useState(1);
  const [shouldFetch, setShouldFetch] = useState(true);
  const [allFetchedMovies, setAllFetchedMovies] = useState([]);
// important !!!! -> return this function for Flatlist to call onEndReached
    const fetchMore = useCallback(() => setShouldFetch(true), []);

  const Mapper = () => (
    <>
      {languageFilter.map((movie, i) => ( 
        <>
          <MovieCard {...movie} key={i + 1} />
        </>
      ))}
    </>
  );

  /* infinite scrolling via useEffect */
  useEffect(
    () => {
      // prevent fetching for other state changes
      if (!shouldFetch) {
        return;
      }

      const fetch = async () => {
          /* import a function of GQL */
        const newFetchedMovies = await GQLFetchingMoviesHere(page, 20 /* <-- limit */);
        
        /* maximize performance by falsifying should fetch */
        setShouldFetch(false);
        setAllFetchedMovies(currentLoadedMovies => [...currentLoadedMovies, ...newFetchedMovies]);
        
        //increment page for the next call
        setPage(page + 1);
      };

      fetch();
    },
    // prevent fetching for other state changes
    [page, shouldFetch],
  );

  return (
    <>
      {userMovieRecommendations ? (
        <FlatList
        data={allFetchedMovies}
        renderItem={renderItem}
        onEndReachedThreshold={0.9}
        onEndReached={fetchMore}
        >
          <Mapper />
        </FlatList>
      ) : (
        <></>
      )}
    </>
  );
};

export default InfiniteRecommendations;
