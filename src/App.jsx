import React from "react";
import Countries from "./components/Countries";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import { useQuery } from "@apollo/client";
import { graphQl } from "./Apollo/graphQl";
import { generateMockedData } from "./services/generator";

function App() {
  const { loading, data } = useQuery(graphQl.CountriesQueryDocument);
  return (
    <>
      {loading ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <div className="App" style={{ width: "700px", margin: "0 15px" }}>
          {data.continents.map((item) => (
            <Countries item={item} key={item.name} />
          ))}
        </div>
      )}
    </>
  );
}

console.log(generateMockedData({ depth: 2, childrenCount: 2 }));

export default App;
