import React, { useState } from "react";
import { StyleSheet,  View } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";

/* bases */
import NavigationBar from "./src/components/NavigationBar/NavigationBar.js";
import HeroBanner from "./src/components/HeroBanner/HeroBanner.js";
import routes from "./src/config/routes.js";
/* required import for NativeBase */
import { Root } from "native-base";
/* cookies */
import CookieManager from '@react-native-cookies/cookies';
/* GQL */
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
  concat,
  ApolloLink,
} from "@apollo/client";

const httpLink = new HttpLink({
  uri: "https://stream-helper-api.herokuapp.com/graphql" /* "http://localhost:4025/graphql" */,
});

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization:
        CookieManager.get("cookie"),
    },

    fetchOptions: {
      headers: {
        authorization: CookieManager.get("cookie"),
      },
      credentials: "include",
    },
  });

  return forward(operation);
});


const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          allMovies: {
            keyArgs: ["type"],
            merge(existing = [], incoming = [], { args, readField }) {
              const merged = existing ? existing.slice(0) : [];
              const existingIdSet = new Set(
                merged.map((task) => readField("id", task)),
              );
              incoming = incoming.filter(
                (task) => !existingIdSet.has(readField("id", task)),
              );
              const afterIndex = merged.findIndex(
                (task) => args.afterId === readField("id", task),
              );
              if (afterIndex >= 0) {
                merged.splice(afterIndex + 1, 0, ...incoming);
              } else {
                merged.push(...incoming);
              }
              return merged;
            },
            // merge(existing = [], incoming = []) {
            //   return [...existing, ...incoming];
            // },
          },
          userMovieRecommendations: {
            keyArgs: ["type"],
            merge(existing = [], incoming = [], { args, readField }) {
              const merged = existing ? existing.slice(0) : [];
              const existingIdSet = new Set(
                merged.map((task) => readField("id", task)),
              );
              incoming = incoming.filter(
                (task) => !existingIdSet.has(readField("id", task)),
              );
              const afterIndex = merged.findIndex(
                (task) => args.afterId === readField("id", task),
              );
              if (afterIndex >= 0) {
                merged.splice(afterIndex + 1, 0, ...incoming);
              } else {
                merged.push(...incoming);
              }
              return merged;
            },
            // merge(existing = [], incoming = []) {
            //   console.log(existing);
            //   return [...existing, ...incoming];
            // },
          },
          providerMovieQuery: {
            keyArgs: ["type"],
            merge(existing = [], incoming = [], { args, readField }) {
              const merged = existing ? existing.slice(0) : [];
              const existingIdSet = new Set(
                merged.map((task) => readField("id", task)),
              );
              incoming = incoming.filter(
                (task) => !existingIdSet.has(readField("id", task)),
              );
              const afterIndex = merged.findIndex(
                (task) => args.afterId === readField("id", task),
              );
              if (afterIndex >= 0) {
                merged.splice(afterIndex + 1, 0, ...incoming);
              } else {
                merged.push(...incoming);
              }
              // console.log(merged, "MERGED");
              return merged;
            },

            read(existing = [], { args, readField }) {
              // if (existing) {
              //   const afterIndex = existing.findIndex(
              //     (task) => args.afterId === readField("id", task),
              //   );
              //   console.log(existing);
              //   if (afterIndex >= 0) {
              //     const page = existing.slice(
              //       afterIndex + 1,
              //       afterIndex + 1 + args.limit,
              //     );
              //     if (page && page.length > 0) {
              //       return page;
              //     }
              //   }
              // }
              return existing;
            },
          },
        },
      },
    },
  }),
  link: concat(authMiddleware, httpLink),
});



function App() {
  /* FIXME: change to conditional logic, if cookie present && valid setIsLoggedIN(true) else (false)*/
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  return (

<Root>
    <ApolloProvider client={client}>
        {isLoggedIn ? <> 
      <NativeRouter>
          <HeroBanner/>
        {routes}
        <NavigationBar/>
        
      </NativeRouter>
        </> : 
        <> 
        <NativeRouter>
        {routes}
        </NativeRouter>
        </>}
    </ApolloProvider>
</Root>

  );
}




export default App;
