var user = {
    name: 'Hiếu',
    age: 18,
    appearence: {
        hairColor: 'black',
        skinColor: 'yellow',
        height: 1700,
        weight: 68
    }
}

function printKey (object, array = []) {
    let keys = array;
    for (let key in object) {
        if(typeof object[key] !== 'object') {
            keys.push(key)
        }
        else {
            keys.push(key)
            printKey (object[key], keys)
        }
    }
    return keys
}
console.log(printKey(user));