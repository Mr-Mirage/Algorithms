
// task 1 = Best O(1), Worst O(n)

const test1 = n => {
    if(n === 1){
        return;
    }
    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= n; j++){
            console.log('*');
            break;
        }
    }
}

// task 2 = O(n^2)

const test2 = n => {
    let a = 0;
   for(let i = 0; i < n; i++){
    for(let j = n; j > i; i--){
        a = a + i + j;
    }
   }
   return a;
}

// task 3 = O(n log n)

const test3 = n => {
    let a = 0;
    for(let i = Math.floor(n / 2); i <= n; i++){
        for(let j = 2; j = j * 2;){
            a = a + Math.floor(n / 2);
        }
    }
    return a;
}

// task 4 = O(log n)

const test4 = n => {
    let a = 0;
    let i = n;
    if(i > 0){
        a += i;
        i = Math.floor(i / 2);
    }
    return a;
}