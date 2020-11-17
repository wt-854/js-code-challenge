// Problem 1 C
// Task: Provide 3 unique implementations of the following function.
// Input: `n` - any integer from `0` to `Number.MAX_SAFE_INTEGER`.
// Output: `return` - summation to `n`, i.e. sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15.

const memoize = (fn) => {
  let cache = {};
  return (...args) => {
    let n = args[0];
    if (n in cache) {
      // console.log('Fetching from cache', n);
      return cache[n];
    } else {
      // console.log('Calculating result', n);
      let result = fn(n);
      cache[n] = result;
      return result;
    }
  };
};

const sum_to_n = memoize((x) => {
  // recursive + memoization
  if (x === 0) {
    return 0;
  } else {
    return x + sum_to_n(x - 1);
  }
});
