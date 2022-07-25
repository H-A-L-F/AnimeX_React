import React, { useContext, useEffect, useState } from 'react'
import Loading from 'react-loading'
import { useParams } from 'react-router-dom'
import Error from '../components/Error'
import { AnimeContext } from '../lib/AniListProvider'

export default function DetailPage() {
    const { id } = useParams()
    const context = useContext(AnimeContext)
    const [currAnime, setCurrAnime] = useState()

    useEffect(() => {
        if (context.data) {
            setCurrAnime(context.data.Page.media.find(e => e.id.toString() === id))
        }
    }, [context])

    function handleFavorite() {
        context.setFavorite(prev => [...prev, currAnime])
    }

    function handleUnFavorite() {
        context.setFavorite(prev => prev.filter(e => {
            return e.id !== currAnime.id
        }))
    }

    function checkFavorite() {
        let flag = false
        context.favorite.forEach(e => {
            if (e.id === currAnime.id) flag = true
        })
        return flag
    }


    if (context.loading) return (
        <Loading />
    )

    else if (context.error) return (
        <Error error={context.error} />
    )

    else if (currAnime) return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={currAnime.coverImage.large} className="max-w-sm rounded-lg shadow-2xl" alt="AnimeThumbnail" />
                <div>
                    <h1 className="text-5xl font-bold">{currAnime.title.romaji}</h1>
                    <p className="py-6">{currAnime.description}</p>
                    {
                        checkFavorite() ?
                            <button className="btn btn-error" onClick={handleUnFavorite}>Unfavorite</button> :
                            <button className="btn btn-success" onClick={handleFavorite}>Favorite</button>
                    }
                </div>
            </div>
        </div>
    )
}
