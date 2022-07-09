import { createContext, useState } from "react";

const favoriteContext = createContext();

const FavoriteProvider = ({children}) => {

    const [isFavorite, setIsFavorite] = useState([]);
    const [favorites, setFavorites] = useState([]);

    const updateFavorite = (id) => {
        const update = [...isFavorite];
        const exFavorite = isFavorite.indexOf(id);
        if(exFavorite >= 0) {
            update.splice(exFavorite, 1);
        }else {
            update.push(id);
        }
        setIsFavorite(update);
    }

    const updateFavoriteProject = (projectFav) => {
        const update = [...favorites]
        const exFavorite = isFavorite.indexOf(projectFav.id);
        if(exFavorite >= 0) {
            update.splice(exFavorite, 1);
        }else {
            update.push(projectFav)
        }
        setFavorites(update);
    }

    return (
        <favoriteContext.Provider value={{favorites, setFavorites, isFavorite, setIsFavorite, updateFavorite, updateFavoriteProject}}>
            {children}
        </favoriteContext.Provider>
    )
}

export {FavoriteProvider, favoriteContext};