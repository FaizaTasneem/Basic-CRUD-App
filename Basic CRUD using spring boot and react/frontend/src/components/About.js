import React, { useState, useEffect } from 'react'
import "../nav.css"
import Typewriter from 'typewriter-effect'
import Typist from 'react-typist'

export default function About() {
    return (
        <div className='text-center py-5'>
            {/* <h1>This is About us page</h1>
            <h1>Thanks for Visiting</h1> */}

            <Typewriter onInit={(t) => t.typeString("Thanks for visiting.").start()}/> <br/>
        </div>
    )
}
