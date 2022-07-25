import React, { useContext } from 'react'
import { HiOutlineHeart, HiOutlineHome } from "react-icons/hi";
import { AnimeContext } from '../lib/AniListProvider';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'

export default function Header({setSearch}) {
    // const {favorite} = useContext(AnimeContext)
    const { favorite } = useContext(AnimeContext)
    const location = useLocation()

    function handleChange(e) {
        setSearch(e.target.value)
    }

    return (
        <div className='flex flex-row justify-between'>
            <div className="form-control grow">
                <input type="text" placeholder="Search" className={"input input-bordered"} onChange={handleChange} disabled={location.pathname !== "/" && location.pathname !== "favorite"}/>
            </div>
            <div className='mx-2'></div>
            <label className="btn btn-ghost btn-circle">
                {
                    location.pathname === "/"
                        ?
                        <Link to={"/favorite"}>
                            <div className="indicator">
                                <HiOutlineHeart size={20} />
                                <span className="badge badge-sm indicator-item">{favorite.length}</span>
                            </div>
                        </Link>
                        :
                        <Link to={"/"}>
                            <HiOutlineHome size={20} />
                        </Link>
                }
            </label>
        </div>
    )
}
