import { useState } from 'react'
import { mergeSort, mergeLists } from '../SortingAlgorithms/mergeSort.js';
export default function SortingVisualizer() {
    const [arr, setArr] = useState([]);
    function genereateNewArray()
    {
        let temp = [];
        for (let i = 0; i < 1000; i++)
        {
            temp.push(getRandomInt(5,1000));        // starts from 5 because bars less than that are small
        }
        setArray(temp);
    }
}

// https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}