import { useQuery } from "@apollo/client/react";
import { createContext } from "react";
import { GET_ANIME_QUERY } from "./getAnimeQuery.js";

export const AnimeContext = createContext();

export default function AnimeListProvider({ children }) {
    const { loading, error, data } = useQuery(GET_ANIME_QUERY, {
        variables: {
            page: 1,
            perPage: 30
        }
    })

    return (
        <AnimeContext.Provider value={{ loading, error, data }}>
            {children}
        </AnimeContext.Provider>
    )
}