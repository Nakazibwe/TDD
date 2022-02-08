/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable eqeqeq */
function factorial(n) {
  let answer = 1;
  if (n == 0 || n == 1) {
    return answer;
  }
  for (let i = n; i >= 1; i--) {
    answer *= i;
  }
  return answer;
}

factorial();
module.exports = factorial;
