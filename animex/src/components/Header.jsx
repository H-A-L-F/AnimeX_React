import React, { useContext } from 'react'
import { HiOutlineHeart } from "react-icons/hi";
import { useLocalStorage } from '../app/hooks/useLocalStorage';
import { AnimeContext } from '../lib/AniListProvider';

export default function Header() {
    const {favorite} = useContext(AnimeContext)

    return (
        <div className='flex flex-row justify-between'>
            <div className="form-control grow">
                <input type="text" placeholder="Search" className="input input-bordered" />
            </div>
            <div className='mx-2'></div>
            <label className="btn btn-ghost btn-circle">
                <div className="indicator">
                    <HiOutlineHeart size={20} />
                    <span className="badge badge-sm indicator-item">{favorite.length}</span>
                </div>
            </label>
        </div>
    )
}
