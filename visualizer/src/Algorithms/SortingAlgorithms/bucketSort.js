import { insertionSort } from "./insertionSort.js";
export function bucketSort(arr)
{
    const sorted_arr = [];
    const buckets = [];
    for (let i = 0; i < arr.length; i++)
    {
        buckets.push([]);
    }
    const maxNum = Math.max(...arr);
    const n = arr.length;

    for (let i = 0; i < n; i++)
    {
        let normalized = (arr[i]/ (maxNum + 1));
        let bucketIdx = Math.floor(normalized * n); 
        buckets[bucketIdx].push(arr[i]);
    }

    for (let i =0; i < buckets.length; i++)
    {
        insertionSort(buckets[i]);
    }

    for (let i = 0; i < buckets.length; i++)
    {
        for (let j = 0; j < buckets[i].length; j++)
        {
            sorted_arr.push(buckets[i][j]);
        }
    }

    return sorted_arr;
}