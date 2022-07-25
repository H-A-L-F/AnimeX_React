import React, { useContext, useEffect, useState } from 'react'
import Loading from 'react-loading'
import AnimeCard from '../components/AnimeCard'
import Error from '../components/Error'
import Header from '../components/Header'
import { AnimeContext } from '../lib/AniListProvider'

export default function HomePage() {
    const animeData = useContext(AnimeContext)
    const [search, setSearch] = useState("")

    return (
        <div className="w-full h-full px-8 py-8">
            <Header />
            <div className='my-2'></div>
            <HomeBody data={animeData} search={search} />
        </div>
    )
}

const HomeBody = ({ data, search }) => {
    const [searchData, setSearchData] = useState([])
    const fav = JSON.parse(localStorage.getItem('fav'))

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
                    console.log(searchData)
                    return <AnimeCard anime={data} key={data.id}/>
                })
            }
        </div>
    )
}
