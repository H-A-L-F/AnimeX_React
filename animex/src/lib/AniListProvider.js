import { useQuery } from "@apollo/client/react";
import { createContext } from "react";
import { useFavoriteAnime } from "../app/hooks/useFavoriteAnime.js";
import { GET_ANIME_QUERY } from "./getAnimeQuery.js";

export const AnimeContext = createContext();

export default function AnimeListProvider({ children }) {
    const { loading, error, data } = useQuery(GET_ANIME_QUERY, {
        variables: {
            page: 1,
            perPage: 30
        }
    })
    let anime = []

    if(data !== undefined) {
        console.log(data.Page.media)
        data.Page.media?.forEach(e => {
            anime.push({...e, favorite: false})
        })
        console.log(anime)
    }

    const init = JSON.parse(localStorage.getItem('fav'))
    const {favorite, dispatch} = useFavoriteAnime({initVal: init !== undefined ? init : anime})

    return (
        <AnimeContext.Provider value={{ loading, error, data, favorite, dispatch }}>
            {children}
        </AnimeContext.Provider>
    )
}