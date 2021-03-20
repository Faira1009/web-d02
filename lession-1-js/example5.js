function addEle (array, index, element) {
    array.splice(index, 0, element);
    return array;
}
var array1 = [1,2,3,4,5,6,7,8,9]
var array2 = ['a', 'b', 'c', 'd']
console.log(addEle(array1, 3, 'a'))
console.log(addEle(array2, 2, 1 ))