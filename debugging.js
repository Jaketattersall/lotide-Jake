const average = function(list) {
    let sum = 0;

    for (let num of list) {
        sum += num;
    }

    return sum / list.length;
};

console.log(average([3, 5, 7]));

const input = process.argv[2];

if (input) {
    console.log(reverse(input));
}

const reverse = function(original) {
    return original.split('').reverse().join('');
};