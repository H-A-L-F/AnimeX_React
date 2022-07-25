import { ACTIONS } from "../actions/useFavoriteAnime";

function handleFavorite(arr, anime) {
    const init = JSON.parse(localStorage.getItem('fav'))
    let res = []
    init.forEach(e => {
        if (e.id === anime.id) e.favorite = true
        res.push(e)
    })
    return res
}

function handleUnfavorite(arr, anime) {
    const init = JSON.parse(localStorage.getItem('fav'))
    let res = []
    init.forEach(e => {
        if (e.id === anime.id) e.favorite = false
        res.push(e)
    })
    return res
}

function checkInclude(hay, needle) {
    let flag = false
    hay.forEach(e => {
        if (e.id === needle.id) flag = true
    })
    return flag
}

export function reducer(favorite, action) {
    switch (action.type) {
        case ACTIONS.FAVORITE: {
            window.localStorage.setItem("fav", JSON.stringify([...favorite, action.payload]))
            return handleFavorite(favorite, action.payload)
            // return [...favorite, action.payload]
        }
        case ACTIONS.UNFAVORTIE: {
            window.localStorage.setItem("fav", JSON.stringify(favorite.filter(fav => fav.id !== action.payload.id)))
            return handleUnfavorite(favorite, action.payload)
            // return favorite.filter(fav => fav.id !== action.payload.id)
        }
        default: {
            return favorite;
        }
    }
}