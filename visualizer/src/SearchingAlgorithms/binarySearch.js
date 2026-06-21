export function binarySearch(arr,target)
{
    const NOT_FOUND = -404;
    let l = 0;
    let r = (arr.length) - 1 
    while (l <= r)
    { 
        let mid = Math.floor(l + (r - l) / 2);

        if (arr[mid] == target)
        {
            return mid;
        }
        else if (arr[mid] < target)
        {
            l = mid + 1;
        }

        else if (arr[mid] > target)
        {
            r = mid - 1;
        }

    }
    return NOT_FOUND;
}