import React, {useState} from "react";
import Countries from "./components/Countries";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import { useQuery } from "@apollo/client";
import { graphQl } from "./Apollo/graphQl";
import { generateMockedData } from "./services/generator";

export const TreeContext = React.createContext();

function App() {
  const { loading, data } = useQuery(graphQl.CountriesQueryDocument);

  const [callbacks, setCallbacks] = useState([]);
  const registerCallback = (callback) => setCallbacks(prev => [...prev, callback]);

  return (
    <>
      {loading ? (
        <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open>
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <TreeContext.Provider value={{ callbacks, registerCallback }}>
          <div className="App" style={{ width: "50%", margin: "0 15px" }}>
          {data.continents.map((item) => <Countries item={item} key={item.name} /> )}
        </div>
        </TreeContext.Provider>
      )}
    </>
  );

}

console.log(generateMockedData({ depth: 2, childrenCount: 2 }));

export default App;
