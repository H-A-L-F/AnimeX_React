import React, { useEffect, useState } from 'react'
import Loading from 'react-loading'
import AnimeCard from '../components/AnimeCard'
import Error from '../components/Error'

export const HomePage = ({ data, search }) => {
    const [searchData, setSearchData] = useState([])
    // const fav = JSON.parse(localStorage.getItem('fav'))

    useEffect(() => {
        if (data.data) {
            setSearchData(data.data.Page.media.filter((e) => {
                if (search) return e.title.romaji.toLowerCase().includes(search.toLowerCase())
                else return data.data.Page.media
            }))
        }
        // setSearchData(fav.filter((e) => {
        //     if (search) return e.title.romaji.toLowerCase().includes(search.toLowerCase())
        //     else return fav
        // }))

    }, [search, data])

    if (data.loading) return (
        <Loading />
    )

    else if (data.error) return (
        <Error error={data.error} />
    )

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
