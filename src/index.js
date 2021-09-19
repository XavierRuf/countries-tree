import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ApolloProvider } from "@apollo/client";
import { graphQl } from "./Apollo/graphQl";

ReactDOM.render(
  <ApolloProvider client={graphQl.client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);