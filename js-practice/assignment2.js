function sumZero (sortedArray = []) {
    let start = 0;
    let end = sortedArray.length -1;
    let searching = true;

    while (searching === true) {

        if (sortedArray[start] < 0 && sortedArray[end] > 0) {

            if(sortedArray[start] + sortedArray[end] ===0) {
                searching = false;
                return [sortedArray[start], sortedArray[end]]
            }
            else if (sortedArray[start] + sortedArray[end] < 0) {
                searching = true;
                start++;

            }
            else if (sortedArray[start] + sortedArray[end] > 0) {
                end = end -1;
            }


        }
        else {
            searching = false;
            return undefined;
        }
    }
}
console.log( sumZero([-3,-2,-1,0,1,2,4,5]))
console.log( sumZero([-3,-2,-1,0,1,2,3]))
console.log( sumZero([-3,-2,-1,0,1]))
console.log( sumZero([-2,0,1,3]))
console.log( sumZero([1,2,3]))
console.log( sumZero([-3,-2,-1,0]))