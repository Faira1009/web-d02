function filterEvenNumbers (array) {
    return array.filter ((ele) => ele % 2 === 0)
}
var array1 = [1,2,3,4,5,6,7,8,9,10]
console.log(filterEvenNumbers(array1))