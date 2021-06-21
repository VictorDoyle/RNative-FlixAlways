import React, { useEffect, useState } from "react";
/* gql */
import { useQuery } from "@apollo/client";
import {
  PROVIDERMOVIEQUERY,
  FILTEREDLENGTH,
} from "../../graphql/operations.js";
import InfiniteRecommendations from "../Infinite/InfiniteRecommendations";
import { StyleSheet, Text  } from "react-native";

const ProvidersHome = ({ providerid }) => {
  const [incrementingCursor, setIncrementingCursor] = useState(20);
  const [userMovieRecommendations, setUserMovieRecommendations] = useState();
  /* base states */
  const [take] = useState(20);
  const [cursor, setCursor] = useState(1);
  const [skip] = useState(0);
  const [more, setMore] = useState(false);

  const variables =
    providerid.netflix.active ||
    providerid.hbomax.active ||
    providerid.hulu.active ||
    providerid.amazonprime.active ||
    providerid.disney.active
      ? [
          providerid.netflix.active
            ? {
                id: 8,
              }
            : { id: 0 },
          providerid.hbomax.active
            ? {
                id: 384,
              }
            : { id: 0 },
          providerid.hulu.active
            ? {
                id: 15,
              }
            : { id: 0 },
          providerid.amazonprime.active
            ? {
                id: 9,
              }
            : { id: 0 },
          providerid.disney.active
            ? {
                id: 337,
              }
            : { id: 0 },
        ]
      : null;

  const {
    error,
    loading: loadingAll,
    data: dataAll,
    fetchMore,
  } = useQuery(PROVIDERMOVIEQUERY, {
    fetchPolicy: "network-only",
    variables: {
      providerMovieQueryTake: take,
      providerMovieQuerySkip: skip,
      providerMovieQueryMyCursor: parseInt(cursor),
      providerMovieQueryProviderId: variables,
    },
  });

  const {
    error: errorMore,
    loading: loadingMore,
    data: dataMore,
    refetch,
  } = useQuery(
    FILTEREDLENGTH,

    {
      variables: {
        filterLengthProviderId: variables,
      },
    },
  );
  let filteredMovies;
  useEffect(() => {
    if (!loadingAll && dataAll) {
      if (
        !providerid.netflix.active &&
        !providerid.hbomax.active &&
        !providerid.hulu.active &&
        !providerid.amazonprime.active &&
        !providerid.disney.active
      ) {
        setUserMovieRecommendations(dataAll.providerMovieQuery);
      } else {
        filteredMovies = dataAll.providerMovieQuery.filter((number) =>
          number.watchproviders
            ? number.watchproviders[0].providerId ===
                (providerid.netflix.active ? 8 : null) ||
              number.watchproviders[0].providerId ===
                (providerid.hbomax.active ? 384 : null) ||
              number.watchproviders[0].providerId ===
                (providerid.hulu.active ? 15 : null) ||
              number.watchproviders[0].providerId ===
                (providerid.amazonprime.active ? 9 : null) ||
              number.watchproviders[0].providerId ===
                (providerid.disney.active ? 337 : null)
            : null,
        );
        setUserMovieRecommendations(filteredMovies);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataAll, providerid]);

  useEffect(() => {
    if ((!loadingMore, dataMore)) {
      if (userMovieRecommendations) {
        setCursor(
          userMovieRecommendations[userMovieRecommendations.length - 1]
            .categoryId,
        );
      }
      if (userMovieRecommendations && dataMore) {
        if (userMovieRecommendations.length < dataMore.filterLength) {
          setMore(true);
        } else {
          setMore(false);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataMore]);

  const bigFetch = () => {
    fetchMore(
      {
        variables: {
          providerMovieQueryMyCursor: userMovieRecommendations.length,
        },
      },
      setCursor(
        userMovieRecommendations[userMovieRecommendations.length - 1]
          .categoryId,
      ),
    );
  };

  const Mapper = () => {
    return (
        /* FIXME: Update to proper infinite scroll */
      <InfiniteRecommendations
        userMovieRecommendations={userMovieRecommendations}
        onLoadMore={bigFetch}
        cursorLength={incrementingCursor}
        error={error}
        more={more}
      />
    );
  };



  return <>
  {userMovieRecommendations ? <Mapper /> : null}</>;
};

export default ProvidersHome;
