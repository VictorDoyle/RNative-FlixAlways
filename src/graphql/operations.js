import { gql } from "@apollo/client";

// ================================= USERS ================================
/**
 * used in
 * "../pages/LandingPage.js"
 *   */
const SIGNUP = gql`
  mutation Mutation($signupUserSignupInput: SignupInput) {
    signupUser(signupInput: $signupUserSignupInput) {
      id
      firstname
      lastname
      username
      email
      token
    }
  }
`;
/**
 * used in
 * "../pages/LandingPage.js"
 *   */
const LOGIN = gql`
  mutation Mutation($signinUserEmail: String!, $signinUserPassword: String!) {
    signinUser(email: $signinUserEmail, password: $signinUserPassword) {
      id
      token
      firstname
      lastname
      username
      email
    }
  }
`;
/**
 * USED FOR VERIFING USERS ON EACH PAGE
 */
const VERIFY = gql`
  query Query {
    verifyUser {
      id
      firstname
      lastname
      username
      email
      token
    }
  }
`;

/**
 * used in
 * "../pages/Profile.js"
 *   */
const UPDATEUSERPROFILE = gql`
  mutation SigninUserMutation(
    $updateUserFirstname: String
    $updateUserLastname: String
    $updateUserUsername: String
    $updateUserEmail: String
  ) {
    updateUser(
      firstname: $updateUserFirstname
      lastname: $updateUserLastname
      username: $updateUserUsername
      email: $updateUserEmail
    ) {
      id
      firstname
      lastname
      username
      email
    }
  }
`;
// ================================= MOVIES ================================

/**
 * used in Homepage
 * ../pages/Homepage.js
 */

const ALLMOVIES = gql`
  query Query(
    $allMoviesTake: Int
    $allMoviesSkip: Int
    $allMoviesMyCursor: Int
  ) {
    allMovies(
      take: $allMoviesTake
      skip: $allMoviesSkip
      myCursor: $allMoviesMyCursor
    ) {
      id
      categoryId
      title
      original_language
      release_date
      runtime
      vote_average
      overview
      image
      genres
    }
  }
`;

/**
 * Last movie for paganation used in homepage
 */
const LASTMOVIE = gql`
  query Query {
    lastMovie {
      id
      categoryId
    }
  }
`;

const WATCHEDMOVIES = gql`
  query Query {
    watchedMovies {
      id
      title
      image
      liked
      disliked
      watched
      saved
    }
  }
`;

const SAVEDMOVIES = gql`
  query Query {
    savedMovies {
      id
      title
      image
      liked
      disliked
      watched
      saved
    }
  }
`;

const DISLIKEDMOVIES = gql`
  query Query {
    dislikedMovies {
      id
      title
      image
      liked
      disliked
      watched
      saved
    }
  }
`;

const LIKEDMOVIES = gql`
  query Query {
    likedMovies {
      id
      title
      image
      liked
      disliked
      watched
      saved
    }
  }
`;

const FILTEREDLENGTH = gql`
  query Query($filterLengthProviderId: [ProviderIds]) {
    filterLength(providerId: $filterLengthProviderId)
  }
`;

const USERUPDATE = gql`
  mutation Mutation(
    $addMovieToUserMovieId: ID
    $addMovieToUserLiked: Boolean
    $addMovieToUserDisliked: Boolean
    $addMovieToUserSaved: Boolean
    $addMovieToUserWatched: Boolean
  ) {
    addMovieToUser(
      movieId: $addMovieToUserMovieId
      liked: $addMovieToUserLiked
      disliked: $addMovieToUserDisliked
      saved: $addMovieToUserSaved
      watched: $addMovieToUserWatched
    ) {
      id
    }
  }
`;

const USERMOVIERECOMMENDATIONS = gql`
  query Query(
    $userMovieRecommendationsTake: Int
    $userMovieRecommendationsSkip: Int
    $userMovieRecommendationsMyCursor: Int
  ) {
    userMovieRecommendations(
      take: $userMovieRecommendationsTake
      skip: $userMovieRecommendationsSkip
      myCursor: $userMovieRecommendationsMyCursor
    ) {
      id
      categoryId
      title
      original_language
      release_date
      runtime
      vote_average
      overview
      image
    }
  }
`;

const MOVIEDETAIL = gql`
  query Query($movieMovieId: ID!) {
    movie(movieId: $movieMovieId) {
      id
      categoryId
      title
      original_language
      runtime
      release_date
      vote_average
      overview
      image
      genres
      backdrop
      movieKeywords
      similarMovies
      trailers1
      trailers2
      trailers3
      credits {
        id
        cast
      }
      watchproviders {
        id
        providers
        providerId
      }
    }
  }
`;
const MOVIESEARCH = gql`
  query Query($movieSearchMovieTitle: String) {
    movieSearch(movieTitle: $movieSearchMovieTitle) {
      title
      categoryId
      original_language
      release_date
      runtime
      vote_average
      image
      overview
      genres
      backdrop
      trailers1
      trailers2
      trailers3
      id
    }
  }
`;

const PROVIDERMOVIEQUERY = gql`
  query Query(
    $providerMovieQueryTake: Int
    $providerMovieQuerySkip: Int
    $providerMovieQueryMyCursor: Int
    $providerMovieQueryProviderId: [ProviderIds]
  ) {
    providerMovieQuery(
      take: $providerMovieQueryTake
      skip: $providerMovieQuerySkip
      myCursor: $providerMovieQueryMyCursor
      providerId: $providerMovieQueryProviderId
    ) {
      id
      categoryId
      title
      original_language
      release_date
      runtime
      vote_average
      overview
      image
      genres
      watchproviders {
        providerId
        id
      }
    }
  }
`;

export {
  SIGNUP,
  VERIFY,
  LOGIN,
  MOVIEDETAIL,
  ALLMOVIES,
  LASTMOVIE,
  WATCHEDMOVIES,
  SAVEDMOVIES,
  DISLIKEDMOVIES,
  USERMOVIERECOMMENDATIONS,
  USERUPDATE,
  UPDATEUSERPROFILE,
  LIKEDMOVIES,
  PROVIDERMOVIEQUERY,
  FILTEREDLENGTH,
  MOVIESEARCH,
};
