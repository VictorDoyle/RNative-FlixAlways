import React from "react";
import { StyleSheet,  View } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";

import NavigationBar from "./src/components/NavigationBar/NavigationBar.js";
import routes from "./src/config/routes.js";

function App() {
  return (
    <NativeRouter>
      {routes}
      <NavigationBar/>
    </NativeRouter>
  );
}




export default App;
