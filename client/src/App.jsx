import React from "react";
import { useState } from 'react';
import blobstop from './assets/blobs-top-right.png'
import blobsbot from './assets/blobs-bottom-left.png'
import Title from './components/Title.jsx'
import Quizzical from './components/Quizzical.jsx'

export default function App(){
    const [isTitle, setIsTitle] = useState(true)

    return (
        <div className="app-container">
            
            {isTitle ? <Title startGame={() => setIsTitle(prevState => !prevState)}/> : <Quizzical />}
            
        </div>
    )
}