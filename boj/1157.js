const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
	const s = input.toLowerCase();
	let count = Array.from({ length: 26 }).fill(0);
	for (const c of s) {
		let index = c.charCodeAt() - 97;
		count[index] += 1;
	}
	let max = Math.max(...count);
	let idx = count.indexOf(max) + 97;
	const maxChar = String.fromCharCode(idx);
	let maxCount = 0;
	count.forEach((c) => {
		if (c === max) maxCount += 1;
	});
	return maxCount >= 2 ? '?' : maxChar.toUpperCase();
};

console.log(solution(input));
