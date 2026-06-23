export function linearSearch(arr,target)
{
    const NOT_FOUND = -404;
    if (arr.length == 0)
    {
        return NOT_FOUND;
    }
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] == target)
        {
            return i;
        }
    }
    return NOT_FOUND;
}