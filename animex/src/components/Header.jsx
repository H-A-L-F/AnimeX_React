import React from 'react'
import { HiOutlineHeart } from "react-icons/hi";

export default function Header() {
    return (
        <div className='flex flex-row justify-between'>
            <div className="form-control grow">
                <input type="text" placeholder="Search" className="input input-bordered" />
            </div>
            <div className='mx-2'></div>
            <label className="btn btn-ghost btn-circle">
                <div className="indicator">
                    <HiOutlineHeart size={20}/>
                    <span className="badge badge-sm indicator-item">8</span>
                </div>
            </label>
        </div>
    )
}
