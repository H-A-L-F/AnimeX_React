import { useReducer } from "react";
import { reducer } from "../reducers/useFavoriteAnime";
import { useLocalStorage } from "./useLocalStorage";

export function useFavoriteAnime({initVal}) {
    const [favorite, dispatch] = useReducer(reducer, initVal)

    return {favorite, dispatch}
}