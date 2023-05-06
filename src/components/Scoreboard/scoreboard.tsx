// create a scoreboard, every round, assing the player name and points.
// the player with the most points will be the winner.

import { useEffect, useMemo, useState } from "react";
import { calculateWinner } from "../../game";
import React from "react";

interface ScoreboardProps {
    playerName: string;
    points: number;
    data: number
}

export const Scoreboard = ({ playerName = "Name", points = 1, data = 27 }: ScoreboardProps) => {

    // let [counter, setCounter] = useState<number>(0)
    
    // useEffect (
    //     () => {setCounter(counter + 1)}, [counter]
    // )

    const countCalculation = useMemo (
        () => {
            if (!calculateWinner) {
                return (
                    <div>
                        {playerName} 
                        {points}
                        {data}
                    </div>
                )
            } else {
                return (
                    <div>
                        <h2>{playerName}</h2>
                        <h3>Result: {points++}</h3>
                        <h3>{data}</h3>
                    </div>
                )
            }
        }, [ data, playerName, points]
    )

    const columns = useMemo(
        () => [
            {
                Header: 'Player Name'
            }
        ], []
    )

    return (
        <div>
            {countCalculation}
        </div>
    )
}
