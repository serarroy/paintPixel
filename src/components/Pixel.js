
import React, { useState } from 'react'
import '../App.css'

function Pixel( {selectedColour} ) {

    const [pixelColour, setPixelColour] = useState('#fff');
    const [prevColour, setPrevColour] = useState(pixelColour);
    const [canChangeColor, setCanChangeColor] = useState(true);

    const changeColour = () => {
        if(changeColour)
            setPixelColour(selectedColour);
        setCanChangeColor(false);
    }

    const changeColourEnter = () => {
        setPrevColour(pixelColour);////
        setPixelColour(selectedColour);
    }

    const resetColour = () => {
        if (canChangeColor) {
            setPixelColour(prevColour);
        }      
        setCanChangeColor(true);
    }

    const deleteColour = () => {
        setPixelColour('#fff');
    }

    return (
        <div 
            className='pixel'
            style={{background: pixelColour}}
            onClick={changeColour}
            onDoubleClick={deleteColour}
            onMouseEnter={changeColourEnter}
            onMouseLeave={resetColour}
        >

        </div>
    )
}

export default Pixel;
