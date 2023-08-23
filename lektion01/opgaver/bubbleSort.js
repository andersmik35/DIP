//Opgave 1.2
let list1 = ["a", "c", "b", "d", "f", "e"];
for (let i = list1.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
        if (list1[j] > list1[j + 1]) {
            let temp = list1[j];
            list1[j] = list1[j+1];
            list1[j+1] = temp;
        }
    }
}
console.log(list1.toString()); // => a,b,c,d,e,f



//Opgave 1.3 Binary Search
function binarySearch(list, target){
    let index = -1;
    let left = 0;
    let right = list.length - 1;
    while (index === -1 && left <= right){
        let middle = Math.floor((left + right) / 2);
        if (list[middle] === target){
            index = middle;
        } else if (list[middle] > target){
            right = middle - 1;
        }   else {
            left = middle + 1;
        }
    }
    return index;
}

//returnere 1 hvis tallet findes, returnere -1 hvis tallet ikke findes
console.log(binarySearch(list1,"b"))



