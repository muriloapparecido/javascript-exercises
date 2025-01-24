const removeFromArray = function(array, ...element) {
    const newArray = []; 

    for (let i = 0; i < array.length; i++){
        if (!element.includes(array[i])){
            newArray.push(array[i]);
        }
    }

    return newArray; 
};

// Do not edit below this line
module.exports = removeFromArray;
