import { createContext, useState } from "react";

const favoriteContext = createContext();

const FavoriteProvider = ({children}) => {

    let favoriteSet;
    const localFavorite = JSON.parse(localStorage.getItem('favorites')) || [];
    if(localFavorite) {
        favoriteSet = localFavorite;
    }

    let favoriteSetProject;
    const localFavoriteProject = JSON.parse(localStorage.getItem('projectFavorites')) || [];
    if(localFavoriteProject) {
        favoriteSetProject = localFavoriteProject;
    }

    const [isFavorite, setIsFavorite] = useState(favoriteSet);
    const [favorites, setFavorites] = useState(favoriteSetProject);

    const updateFavorite = (id) => {
        const update = [...isFavorite];
        const exFavorite = isFavorite.indexOf(id);
        if(exFavorite >= 0) {
            update.splice(exFavorite, 1);
        }else {
            update.push(id);
        }
        setIsFavorite(update);
        localStorage.setItem('favorites', JSON.stringify(update));
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
        localStorage.setItem('projectFavorites', JSON.stringify(update));
    }

    return (
        <favoriteContext.Provider value={{favorites, setFavorites, isFavorite, setIsFavorite, updateFavorite, updateFavoriteProject}}>
            {children}
        </favoriteContext.Provider>
    )
}

export {FavoriteProvider, favoriteContext};