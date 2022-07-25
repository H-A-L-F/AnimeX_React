import { useQuery } from "@apollo/client/react";
import { createContext } from "react";
import { useFavoriteAnime } from "../app/hooks/useFavoriteAnime.js";
import { useLocalStorage } from "../app/hooks/useLocalStorage.js";
import { GET_ANIME_QUERY } from "./getAnimeQuery.js";

export const AnimeContext = createContext();

export default function AnimeListProvider({ children }) {
    const { loading, error, data } = useQuery(GET_ANIME_QUERY, {
        variables: {
            page: 1,
            perPage: 30
        }
    })
    // const init = JSON.parse(localStorage.getItem('fav'))

    // function checkInclude(hay, needle) {
    //     let flag = false
    //     hay.forEach(e => {
    //         if (e.id === needle.id) flag = true
    //     })
    //     return flag
    // }

    // let animeFav = []
    // if (data !== undefined) {
    //     data.Page.media?.forEach(e => {
    //         animeFav.push({ ...e, favorite: checkInclude(init, e) })
    //     })
    //     if(init === undefined) {
    //         init = animeFav
    //         localStorage.setItem('fav', JSON.stringify(animeFav))
    //     }
    // }

    // const { favorite, dispatch } = useFavoriteAnime({ initVal: init })

    const [favorite, setFavorite] = useLocalStorage("fav", [])

    return (
        <AnimeContext.Provider value={{ loading, error, data, favorite, setFavorite }}>
            {children}
        </AnimeContext.Provider>
    )
}