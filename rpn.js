/**
 * @param {string[]} tokens
 * @return {number}
 */
const OPERATORS = ['+', '-', '*', '/'];
var evalRPN = function (tokens) {
	let stack = [];
	for (let token of tokens) {
		if (OPERATORS.includes(token)) {
			let first = stack.pop();
			let second = stack.pop();
			console.log('operator: ', token);
			console.log('first: ', first);
			console.log('second', second);
			if (token === '+') {
				stack.push(first + second);
			} else if (token === '-') {
				stack.push(first - second);
			} else if (token === '*') {
				stack.push(first * second);
			} else {
				stack.push(parseInt(first / second));
			}
		} else {
			stack.push(Number(token));
		}
	}
	return stack.pop();
};

console.log(evalRPN(['2', '1', '+', '3', '*']));
