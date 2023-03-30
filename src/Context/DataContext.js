import React, { useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios";

export let DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [dataset, setDataset] = useState();

  const getData = async (arg) => {
    // console.log({ arg });
    await axios
      .get(`https://zen-portal-clone.onrender.com/api/classes/${arg}`)
      .then((res) => {
        console.log(res.data);
        setDataset(res.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  // console.log(dataset);
  return (
    <DataContext.Provider value={{ getData, dataset }}>
      {children}
    </DataContext.Provider>
    // <div>{dataset}</div>
  );
};

export default DataContext;
