import React from 'react'

export default function WatchListScreen(props) {
    const bookname = props.match.params.id;
    console.log('bookname',bookname)
    return (
        <div>
            <h1>Watchlist screen</h1>
            <p>ADD TO WATCHLIST : Book : {bookname} </p>
        </div>
    )
}
