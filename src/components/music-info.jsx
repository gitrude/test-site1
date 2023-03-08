import React from 'react'

const MusicInfoComponent = () => {

    return (<>
        <p> This is my music info stats</p>
        <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/clpivcT5-dg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div>

                <h2>CCE037 - Relations </h2> {/* Title of project */}
                <p> Originally released in 1995, Ian Pooley's <i>Relations</i> gets a fresh pressing on Chiwax's Classic Edition series. 
                </p> {/* About the track */}
            </div>

            <div>
                <h2>Track Details</h2> 
                <ul>
                    <li>Length: 5:34</li>
                    <li>Artist: Ian Pooley</li>
                    <li>Track Name: Sorority</li>
                    <li>Album: Relations</li>
                </ul>
            </div>

            <div>
                <h3>Listen</h3>
                <ul>
                    <li> <a href="https://dbh-music.bandcamp.com/album/cce037">Bandcamp</a></li>
                    <li> <a href="https://open.spotify.com/album/0xfizBq3g6a4jNXstLxnNm?si=bp3NofMxRqyXifpAnXELoA">Spotify</a></li>
                    <li> <a href="https://music.apple.com/us/album/relations/1672435396">Apple Music</a></li>
                    <li> <a href="https://www.discogs.com/release/25970965-Ian-Pooley-Relations">Discogs</a></li>
                </ul>
            </div>
        </div>

    </>
    )

}


export default MusicInfoComponent
