
import React, { useState } from "react";
import "../App.css";
import { CirclePicker } from "react-color";
import PaintingPanel from "./PaintingPanel";

export default function OptionsPanel() {
    const [canvasWidth, setCanvasWidth] = useState(16);
    const [canvasHeight, setCanvasHeight] = useState(16);
    const [showOptionsPanel, setShowOptionsPanel] = useState(true);
    const [showCanvas, setShowCanvas] = useState(false);
    const [selectedColour, setSelectedColour] = useState('#ffffff');

    const startCanvas = () => {
        setShowOptionsPanel(false);
        setShowCanvas(true);
    }

    const backHandler = (e) => {
        setShowOptionsPanel(true);
        setShowCanvas(false);
    }
    const widthHandler = (e) => {
        setCanvasWidth(e.target.value);
    }

    const heightHandler = (e) => {
        setCanvasHeight(e.target.value);
    }

    const changeColour = (color) => {
        setSelectedColour(color.hex);
    }
    return (
        <>
        {
            showOptionsPanel &&(
                <div className='optionsPanel'>
                    <h1 className='title'>PAINT PIXEL</h1>
                    <div className='options'>
                        <p className='label'>Width</p>
                        <input type='number' onChange={widthHandler}/>
                        <p className='label'>Height</p>
                        <input type='number' onChange={heightHandler}/>
                    </div>
                    <div className='paint-button'>
                        <button onClick={startCanvas}>PAINT NOW!!</button>
                    </div>
                </div>
            )
        }

        {
            showCanvas && (
                <>
                    <button className='button' onClick={backHandler}>Go back!</button>
                    <CirclePicker className='picker' color={selectedColour} onChangeComplete={changeColour}></CirclePicker>
                    <PaintingPanel
                        width={canvasWidth} 
                        height={canvasHeight}
                        selectedColour={selectedColour}
                    />  
                </>
            )
        }
    </>
    )
}