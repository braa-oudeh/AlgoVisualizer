import { useState } from 'react'
import { useEffect } from 'react';
export default function SortingVisualizer() {
    const [arr, setArr] = useState([]);
    function genereateNewArray()
    {
        let temp = [];
        for (let i = 0; i < 1000; i++)
        {
            temp.push(getRandomInt(5,1000));        // starts from 5 because bars less than that are small
        }
        setArr(temp);
    }
    useEffect(() => {
        genereateNewArray();
    }, []);

    return (
    <>
    {arr.map((num, index) => (
        <p key={index}>{num}</p>
    ))}
    </>
    );
}

// https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}