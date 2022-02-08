/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable eqeqeq */
function factorial(n) {
  if (typeof n != 'number') { return undefined; }
  let answer = 1;
  if (n == 0 || n == 1) {
    return answer;
  }
  for (let i = n; i >= 1; i--) {
    answer *= i;
  }
  return answer;
}

module.exports = factorial;
