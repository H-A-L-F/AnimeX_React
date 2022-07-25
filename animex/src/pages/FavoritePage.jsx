import React, { useContext, useEffect, useState } from 'react'
import { AnimeContext } from '../lib/AniListProvider'
import AnimeCard from '../components/AnimeCard'

export default function FavoritePage({ search }) {
    const { favorite } = useContext(AnimeContext)
    const [searchData, setSearchData] = useState([])

    useEffect(() => {
        setSearchData(favorite.filter((e) => {
            if (search) return e.title.romaji.toLowerCase().includes(search.toLowerCase())
            else return favorite
        }))
        // setSearchData(fav.filter((e) => {
        //     if (search) return e.title.romaji.toLowerCase().includes(search.toLowerCase())
        //     else return fav
        // }))

    }, [search, favorite])

    return (
        <div className='flex flex-row flex-wrap justify-between'>
            {
                searchData.map((data) => {
                    return <AnimeCard anime={data} key={data.id} />
                })
            }
        </div>
    )
}
