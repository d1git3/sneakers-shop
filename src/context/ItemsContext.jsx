import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/items")
      .then(response => {
        setItems(response.data);
      })
  }, [])

  return (
    <ItemsContext.Provider value={{ items }}>
      {children}
    </ItemsContext.Provider>
  );
};

export const useItems = () => useContext(ItemsContext);