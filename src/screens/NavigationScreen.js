import React from 'react'

export default function NavigationScreen() {
    return (
        <div className="nav-menu">
            <ul>
                <li><a href="/" className="nav-item">Now Reading</a></li>
                <li><a href="/" className="nav-item">Browse</a></li>
                <li><a href="/" className="nav-item">Favourite Books</a></li>
                <li><a href="/watchlist" className="nav-item">Watchlist</a></li>
                <li><a href="/" className="nav-item">History</a></li>
            </ul>

            <ul>
                <li><a href="/" className="nav-item">Must Read Books</a></li>
                <li><a href="/" className="nav-item">Classic Novels</a></li>
                <li><a href="/" className="nav-item">Fiction</a></li>
                <li><a href="/" className="nav-item">Non Fiction</a></li>
            </ul>

        </div>
    )
}
