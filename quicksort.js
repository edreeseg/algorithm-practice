function quicksort(originalArray, low = 0, high = originalArray.length - 1, initial = true){
    const arr = initial ? [...originalArray] : originalArray;
    if (high > low){
        const pivot = high;
        const p = partition(arr, pivot, low, high);
        quicksort(arr, low, p - 1, false);
        quicksort(arr, p + 1, high, false);
    }
    return arr;
}

function partition(arr, pivot, low, high){
    let partitionIndex = low;
    for (let i = low; i < high; i++){
        if (arr[pivot] > arr[i]) {
            swap(arr, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(arr, partitionIndex, high);
    return partitionIndex;
}

function swap(arr, i, j){
    [arr[i], arr[j]] = [arr[j], arr[i]];
}