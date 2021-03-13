function same (array1 = [], array2 = []) {
    let temp2 = [...array2]
    let result = 0;
 if (array1.length !== array2.length) {
     return false
 }
 else {
     for (let i =0; i <= array1.length; i++) {
         for (let y =0; y <= temp2.length; y++) {
             if (array1[i] === Math.sqrt(temp2[y]) || Math.sqrt(array1[i]) === temp2[y]) {
                 result++;
                 temp2.splice(y,1)
             }
         }
     }
     if (result === array1.length) {
         return true;
     }
     else {
         return false;
     }
 }
}


console.log(same([1,2,3],[4,1,9]))
console.log(same([1,2,3],[1,9]))
console.log(same([1,2,1],[4,4,1]))
console.log(same([1,2,1],[4,1,1]))