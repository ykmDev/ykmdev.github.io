import React from 'react'

export default function Spotify() {
    return (
        <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M"  frameBorder="0" className="h-full w-full bg-ub-cool-grey" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    )
}

export const displaySpotify = () => {
    <Spotify> </Spotify>
}
