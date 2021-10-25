function solve(input) {
    const result = [];
    input.sort((a, b) => a - b);

    while (input.length) {
        result.push(input.shift());
        result.push(input.pop());
    }

    return result;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));