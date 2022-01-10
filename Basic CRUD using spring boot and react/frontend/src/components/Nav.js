import React from 'react'
import "../nav.css"
import {
    Link
  } from "react-router-dom";

export default function Nav() {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/books">Books</Link></li>
                <li><Link to="/add">Add Book</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </div>
    )
}
