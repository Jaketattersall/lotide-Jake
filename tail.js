const tail = function(arr){
    return arr.splice(1,arr.length -1)
}
const array = [1, 2, 3, 4, 5, 6]
console.log(tail(array))