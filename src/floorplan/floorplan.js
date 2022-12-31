import React from 'react';
import "./floorplan.css";

let floorplan = {
    groups: [{
        id: "0",
        objects: [
            {id: "1", type: "table", symbol: "rect", x: 100, y: 100, width: 175, height: 125, label: "Table 1"},
            {id: "2", type: "seat", symbol: "circle", x: 130, y: 70, radius: 25},
            {id: "3", type: "seat", symbol: "circle", x: 70, y: 135, radius: 25},
            {id: "4", type: "seat", symbol: "circle", x: 70, y: 190, radius: 25},
            {id: "5", type: "seat", symbol: "circle", x: 185, y: 70, radius: 25},
            {id: "6", type: "seat", symbol: "circle", x: 240, y: 70, radius: 25},
            {id: "7", type: "seat", symbol: "circle", x: 130, y: 255, radius: 25},
            {id: "8", type: "seat", symbol: "circle", x: 185, y: 255, radius: 25},
            {id: "9", type: "seat", symbol: "circle", x: 240, y: 255, radius: 25},
            {id: "10", type: "seat", symbol: "circle", x: 305, y: 135, radius: 25},
            {id: "11", type: "seat", symbol: "circle", x: 305, y: 190, radius: 25},
        ]
    }]
}

const renderSvgComponent = (obj) => {
    switch (obj.type) {
        case 'seat': 
        {
            return <circle cx={obj.x} cy={obj.y} r={obj.radius} className="seat" id={`${obj.type}-${obj.id}`} key={obj.id}/>;
        }
        case 'table':
        {
            return <>
                <rect x={obj.x} y={obj.y} width={obj.width} height={obj.height} className="table" id={`${obj.type}-${obj.id}`} key={obj.id}/>
                <text x={obj.x + (obj.width / 2)} y={obj.y + (obj.height / 2)} dominantBaseline="middle" textAnchor="middle" className="label noselect" id={`${obj.type}-${obj.id}-label`} key={`${obj.id}-label`}>{obj.label}</text>
            </>;    
        }
        default: {
            return null;
        }
    }
}

const FloorPlan = () => {
    return (
        <div className="floorplan">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 500" width="750" height="500">
                <defs>
                    <pattern id="smallGrid" width="25" height="25" patternUnits="userSpaceOnUse">
                        <path d="M 25 0 L 0 0 0 25" fill="none" stroke="gray" strokeWidth="0.5"/>
                    </pattern>
                    <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                        <rect width="100" height="100" fill="url(#smallGrid)"/>
                        <path d="M 100 0 L 0 0 0 100" fill="none" stroke="gray" strokeWidth="1"/>
                    </pattern>
                </defs>
                <g fill="#fff">
                    <rect width="100%" height="100%" fill="url(#grid)" />
                    {floorplan.groups.map(g => <g key={g.id} id={`group-${g.id}`}>
                        {g.objects.map(obj => renderSvgComponent(obj))}
                    </g>)}
                </g>                            
            </svg>
        </div>
    )
}

export default FloorPlan;