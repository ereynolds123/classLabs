function fibonacci(n) {
    // Write your code here
if (n < 2) {
    return n
} else {
    return n + fibonacci (n-1)
}
}


console.log(fibonacci(10))