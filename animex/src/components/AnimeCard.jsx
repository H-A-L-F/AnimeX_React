import React from 'react'

export default function AnimeCard({ anime }) {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl my-2">
            <figure><img src={anime.coverImage.large} alt="AnimeThumbnail"/></figure>
            <div className="card-body">
                <h2 className="card-title">{anime.title.romaji}</h2>
                <p className='truncate max-w-md lg:max-h-24'>{anime.description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-error">Favorite</button>
                </div>
            </div>
        </div>
    )
}
