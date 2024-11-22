// Implement the function unique_in_order which takes as argument a sequence and returns a list of items 
// without any elements with the same value next to each other and preserving the original order of elements.

//SOLUTION

var uniqueInOrder = function (iterable) {
    let elementList = [];
    for (let i = 0; i < iterable.length;) {
        if (iterable[i] === iterable[i + 1]) {
            i++
        } if (iterable[i] != iterable[i + 1]) {
            elementList.push(iterable[i]);
            i++
        }
    }
    return elementList
}