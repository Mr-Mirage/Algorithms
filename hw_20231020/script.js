
const findElementK = (arr1, arr2, k) => {
    let pointer1 = 0;
    let pointer2 = 0;
    
    for(let i = 0; i < k -1; i++){
        if(arr1[pointer1] < arr2[pointer2]){
            pointer1++;
        }else{
            pointer2++
        }
    }
    return Math.min(arr1[pointer1], arr2[pointer2]);
};
// findElementK([100, 112, 256, 349, 770], [72, 86, 113, 119, 265, 445, 892], 7)

const array1 = [100, 112, 256, 349, 770];
const array2 = [72, 86, 113, 119, 265, 445, 892];
const k = 7;
const result = findElementK(array1, array2, k);
console.log(result);

