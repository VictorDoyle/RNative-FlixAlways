import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NativeRouter, Route, Link } from "react-router-native";
/* pages */

function Home() {
  return <Text style={styles.header}>Home</Text>;
}

function About() {
  return <Text style={styles.header}>Recommendations</Text>;
}

function Topic({ match }) {
  return <Text style={styles.topic}>{match.params.topicId}</Text>;
}

function Topics({ match }) {
  return (
    <View>
      <Text style={styles.header}>Movies</Text>
      <View>
        <Link
          to={`${match.url}/saved`}
          style={styles.subNavItem}
          underlayColor="#f0f4f7"
        >
          <Text>Saved Movies</Text>
        </Link>
        <Link
          to={`${match.url}/watched`}
          style={styles.subNavItem}
          underlayColor="#f0f4f7"
        >
          <Text>Watched Movies</Text>
        </Link>
        <Link
          to={`${match.url}/disliked`}
          style={styles.subNavItem}
          underlayColor="#f0f4f7"
        >
          <Text>Disliked Movies</Text>
        </Link>
      </View>

      <Route path={`${match.url}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.url}
        render={() => <Text style={styles.topic}> Find Your Movies</Text>}
      />
    </View>
  );
}

function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <View style={styles.nav}>
          <Text> Welcome To FlixAlways </Text>
          <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text>Home</Text>
          </Link>
          <Link to="/about" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text>Movie Recommendations</Text>
          </Link>
          <Link to="/topics" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text>Your Movies</Text>
          </Link>
        </View>

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </View>
    </NativeRouter>
  );
}



const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },
  header: {
    fontSize: 20
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  subNavItem: {
    padding: 5
  },
  topic: {
    textAlign: "center",
    fontSize: 15
  }
});

export default App;
