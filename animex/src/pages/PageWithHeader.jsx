import React, { useContext, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '../components/Header'
import { AnimeContext } from '../lib/AniListProvider'
import DetailPage from './DetailPage'
import FavoritePage from './FavoritePage'
import { HomePage } from './HomePage'

export default function PageWithHeader() {
    const animeData = useContext(AnimeContext)
    const [search, setSearch] = useState("")

    return (
        <div className="w-full h-full px-8 py-8">
            <Header setSearch={setSearch}/>
            <div className='my-2'></div>
            <Routes>
                <Route path="favorite" element={<FavoritePage search={search}/>} />
                <Route path='' element={<HomePage data={animeData} search={search} />} />
                <Route path=':id' element={<DetailPage />}/>
            </Routes>
        </div>
    )
}
