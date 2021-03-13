function frequencyCount(array) {
  return array.reduce(function (freqency, element) {
    if (element in freqency) {
      freqency[element]++;
    }
    else {
        freqency[element] = 1
    }
    return freqency
  }, {});
}
var array1 = ['a', 'b', 'c', 'a', 'd', 'c', 'e', 'b', 'f']

console.log(frequencyCount(array1))