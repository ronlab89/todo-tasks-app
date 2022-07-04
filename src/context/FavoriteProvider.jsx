import { createContext, useState } from "react";

const favoriteContext = createContext();

const FavoriteProvider = ({children}) => {

    const [favorites, setFavorites] = useState([]);
    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <favoriteContext.Provider value={{favorites, setFavorites, isFavorite, setIsFavorite}}>
            {children}
        </favoriteContext.Provider>
    )
}

export {FavoriteProvider, favoriteContext};