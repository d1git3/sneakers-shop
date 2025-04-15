import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {
  const [ favouritesItems, setFavouritesItems ] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/favourites")
      .then(response => {
        setFavouritesItems(response.data)
      })
  }, [])

  const handleFavoritesItemEvents = (item, isFavourite) => {
    if (isFavourite) {
      removeFromFavourites(item)
    } else {
      addToFavourites(item)
    }
  }

  const addToFavourites = async (newItem) => {
    try {
      await axios.post("http://localhost:3000/favourites", newItem)
      setFavouritesItems(items => [...items, newItem])
    } catch (error) {
      alert("Не удалось добавить в Закладки")
    }
  }

  const removeFromFavourites = async (itemToRemove) => {
    try {
      await axios.delete(`http://localhost:3000/favourites/${itemToRemove.id}`);
      setFavouritesItems(items => [...items.filter(item => item.id !== itemToRemove.id)]);
    } catch (error) {
      alert("Не удалось удалить из избранного")
    }
  }

  return (
    <FavouritesContext.Provider value={{
      favouritesItems,
      setFavouritesItems,
      handleFavoritesItemEvents
    }}>
      {children}
    </FavouritesContext.Provider>
  )
}

export const useFavorites = () => useContext(FavouritesContext);