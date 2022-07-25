import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimeContext } from '../lib/AniListProvider'

export default function AnimeCard({ anime }) {
    // const { favorite, dispatch, animeFav } = useContext(AnimeContext)

    // function handleFavorite() {
    //     dispatch({ type: ACTIONS.FAVORITE, payload: anime })
    // }

    // function handleUnFavorite() {
    //     dispatch({type: ACTIONS.UNFAVORTIE, payload: anime})
    // }
    const { favorite, setFavorite } = useContext(AnimeContext)
    const navigate = useNavigate()

    function handleFavorite() {
        setFavorite(prev => [...prev, anime])
    }

    function handleUnFavorite() {
        setFavorite(prev => prev.filter(e => {
            return e.id !== anime.id
        }))
    }

    function handleClick() {
        navigate("" + anime.id)
    }

    function checkFavorite() {
        let flag = false
        favorite.forEach(e => {
            if (e.id === anime.id) flag = true
        })
        return flag
    }

    return (
        <div className="card lg:card-side bg-base-300 shadow-xl my-4">
            <figure><img src={anime.coverImage.large} alt="AnimeThumbnail" /></figure>
            <div className="card-body">
                <h2 className="card-title">{anime.title.romaji}</h2>
                <p className='truncate lg:max-w-md lg:max-h-40'>{anime.description}</p>
                <div className="card-actions justify-end">
                    <div className='flex flex-row'>
                        <button className="btn btn-info mr-4" onClick={handleClick}>View</button>
                        {
                            checkFavorite() ?
                                <button className="btn btn-error" onClick={handleUnFavorite}>Unfavorite</button> :
                                <button className="btn btn-success" onClick={handleFavorite}>Favorite</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
