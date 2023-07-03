import React, { useState } from 'react';
import './Elevator.css'

export default function Elevator () {
    let initialTime = 0;
    const [floor, setFloor] = useState(12);
    const [floorsInQueue, setFloorsInQueue] = useState([2,9,1,32]); //560
    // const [floorsInQueue, setFloorsInQueue] = useState([9,2,1,32]); //420
    // const [floorsInQueue, setFloorsInQueue] = useState([1,2,9,32]); //420
    // const [floorsInQueue, setFloorsInQueue] = useState([32,9,2,1,]); //510
    // This can be added to set a different mode to the current Elevator array/ queue
    // const [mode, setMode] = useState(false);
    const [totalTravelTime, setTotalTravelTime] = useState(0);
    const [visitedFloors, setVisitedFloors] = useState(Array<number>);
    const singleFloorTravelTime: number = 10;

    function elevatorQueue() : void {
        // optimize travel time ?
        //    if (mode){
        //      setFloorsInQueue(floorsInQueue.sort((a, b)=>{
        //     console.log({floorsInQueue})
        //     return a - b; // lowest to highest
        //     // return b - a; // highest to lowest
        //     }))
        // }

        let elevatorStart: number = floor;
        const allFloors: Array<number> = [elevatorStart, ...floorsInQueue];
        let traveltime: number;

        floorsInQueue.map(floors => {
            let singleFloor: number = floors
              if (elevatorStart > singleFloor) {
                elevatorStart = elevatorStart - singleFloor;
                traveltime = elevatorStart * singleFloorTravelTime;
                elevatorStart = singleFloor;
                initialTime = initialTime + traveltime;
              }
              else if (elevatorStart < singleFloor) {
                elevatorStart = -elevatorStart + singleFloor;
                traveltime = elevatorStart * singleFloorTravelTime;
                elevatorStart = singleFloor;
                initialTime = initialTime + traveltime;
              }
        })

        setFloor(elevatorStart);
        setTotalTravelTime(initialTime);
        setVisitedFloors(allFloors);
    };

    return(
        <div className='card' data-testid={'elevator-1'}>
            <h2>Elevator Simulator</h2>
            <p className='floorDisplay'> Floor: {floor}</p>
            <button className='btn' onClick={()=> {elevatorQueue();}}>Start</button>
            <p className='floorDisplay'>Total Travel Time: {totalTravelTime}</p>
            <p>Floors Visited: {visitedFloors.join(', ')}</p>
            {/* maybe a different mode can be added to get a faster logic on the Elevator */}
            {/* <div>
                <label>
                    <input type="checkbox" onClick={()=> {setMode(!mode)}}/>
                    <span> Advance Mode</span>
                </label>
            </div> */}
        </div>
    );
};

