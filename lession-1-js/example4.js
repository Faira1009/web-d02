function removeLastEle (array, lastIndex) {
    return array.slice(0, array.length - lastIndex)
}
var array1 = [1,2,3,4,5,6,7,8,9]
var array2 = ['a', 'b', 'c', 'd']
console.log (removeLastEle(array1, 2))
console.log (removeLastEle(array2, 3))
