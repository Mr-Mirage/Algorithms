const quickSort = (arr, startIndex, endIndex) => {
    if (startIndex >= endIndex) {
        return;
    }
    const pivotIndex = helper(arr, startIndex, endIndex);
    quickSort(arr, startIndex, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, endIndex);
}

const helper = (arr, startIndex, endIndex) => {
    const pivotIndex = endIndex;
    const pivot = arr[pivotIndex];

    let newPivotIndex = startIndex;
    for (let i = startIndex; i < endIndex; i++) {
        if (arr[i] < pivot) {
            swap(arr, i, newPivotIndex);
            newPivotIndex++;
        }
    }

    swap(arr, newPivotIndex, pivotIndex);

    return newPivotIndex;
}

const swap = (arr, first, second) => {
    const temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}

const arr = [];
const arrLength = 30;

for (let i = 0; i < arrLength; i++) {
    arr.push(Math.floor(Math.random() * 30));
}

console.log('Исходный массив:', arr);
quickSort(arr, 0, arr.length - 1);
console.log('Отсортированный массив:', arr);
