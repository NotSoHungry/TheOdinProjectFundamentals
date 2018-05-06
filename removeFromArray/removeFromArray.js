var removeFromArray = function(arr) {
    let valuesToRemove = [];
    
    for (i = 1; i < arguments.length; i++) {
      valuesToRemove.push(arguments[i]);
    }

    valuesToRemove.forEach((element) => {
        let elementIndex = arr.indexOf(element);
        if (elementIndex > -1) {
            arr.splice(elementIndex, 1);
        }
    })

    return arr;
}

module.exports = removeFromArray
