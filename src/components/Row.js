import React from 'react';
import Pixel from './Pixel';
import '../App.css'

function Row({ width, selectedColour }) {
    let pixels = [];

    for (let i = 0; i < width; i++) {
        pixels.push(<Pixel key={i} selectedColour={selectedColour} />);
    }

    return (
        <div className='row'>{pixels}</div>
    )
}

export default Row;