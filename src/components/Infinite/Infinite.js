import React from "react";
import MovieCard from "../MovieCard/MovieCard.js";

const Infinite = ({ allMovies }) => {
  // this is a filter for dan the great
  const languageFilter = allMovies.filter(
    (m) =>
      m.original_language != "hi" &&
      "es" &&
      "pk" &&
      m.title != "Gabriel's Inferno" &&
      m.title != "Gabriel's Inferno Part II" &&
      m.title != "Gabriel's Inferno Part III",
  );
  const Mapper = () => (
    <>
      {languageFilter.map((movie, index) => (
        <>
          <MovieCard {...movie} key={index} />
        </>
      ))}
    </>
  );
  //
  return (
    <>
      {allMovies ? (
      <Mapper/>
      ) : (
        <></>
      )}
    </>
  );
};

export default Infinite;
