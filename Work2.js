let arr = [1, 3, 4, 3, 2, 1, 2];
let map = new Map;
let leastCount = -1;

if (arr.length === 0) {
    leastCount = `Array doesn't have value`;
} else {
    for (let arrayIndexing = 0; arrayIndexing < arr.length; arrayIndexing++) {
        if (map.get(arr[arrayIndexing]) === undefined) {
            map.set(arr[arrayIndexing], 1);
            leastCount = arr[arrayIndexing];
            console.log(leastCount)
        } else {
            if (map.get(leastCount) >= map.get(arr[arrayIndexing]) + 1) {
                map.set(arr[arrayIndexing], map.get(arr[arrayIndexing]) + 1);
                leastCount = arr[arrayIndexing];
                console.log(leastCount)
            } else if (map.get(leastCount) < map.get(arr[arrayIndexing]) + 1) {
                map.set(arr[arrayIndexing], map.get(arr[arrayIndexing]) + 1);
                console.log(leastCount)
            }
        }
    }
}

