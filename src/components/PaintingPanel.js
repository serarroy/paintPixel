
import React, {useRef} from 'react'
import Row from './Row';
import '../App.css'
import { exportComponentAsPNG, exportComponentAsJPG} from "react-component-export-image";

function PaintingPanel( {width, height, selectedColour}) {

    const panelRef = useRef();

    let rows = [];

    for (let i = 0; i < height; i++) {
        rows.push(<Row key={i} width={width} selectedColour={selectedColour} />);
    }

    return (
        <div className="painting-panel">
            <div id="pixels" ref={panelRef}>
            {rows}
            </div>
            <div className='button-container'>
                <button className="button" onClick={() => exportComponentAsJPG(panelRef)}>Export as JPG</button>
                <button className="button" onClick={() => exportComponentAsPNG(panelRef)}>Export as PNG</button>
            </div>
        </div>
    );
}

export default PaintingPanel;