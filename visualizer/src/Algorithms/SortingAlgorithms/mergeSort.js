export function mergeSort(arr)
{
    if (arr.length <= 1)
    {
        return arr;
    }

    const mid = Math.floor((arr.length) / 2);
    const left_arr = mergeSort(arr.slice(0,mid));
    const right_arr = mergeSort(arr.slice(mid));
    return mergeLists(left_arr, right_arr);
}

function mergeLists(left_arr, right_arr)
{
    let i = 0;
    let j = 0;
    let sortedArr = [];

    while (i < left_arr.length && j < right_arr.length)
    {
        if (left_arr[i] <= right_arr[j])
        {
            sortedArr.push(left_arr[i]);
            i += 1;
        }

        else 
        {
            sortedArr.push(right_arr[j]);
            j += 1 
        }
    }

    while (i < left_arr.length)
    {
        sortedArr.push(left_arr[i]);
        i += 1;
    }

    while (j < right_arr.length)
    {
        sortedArr.push(right_arr[j]);
        j += 1;
    }

    return sortedArr;

}

