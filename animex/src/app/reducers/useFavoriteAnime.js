import { ACTIONS } from "../actions/useFavoriteAnime";

export function reducer(favorite, action) {
    switch (action.type) {
        case ACTIONS.FAVORITE: {
            window.localStorage.setItem("fav", JSON.stringify([...favorite, action.payload]))
            return [...favorite, action.payload]
        }
        case ACTIONS.UNFAVORTIE: {
            window.localStorage.setItem("fav", JSON.stringify(favorite.filter(fav => fav.id !== action.payload.id)))
            return favorite.filter(fav => fav.id !== action.payload.id)
        }
        default: {
            return favorite;
        }
    }
}