const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

function solution(n) {
	if (n < 1) return 0;
	let dp = new Array(n + 1);
	dp[1] = 1;
	if (n > 1) dp[2] = 2;
	if (n > 2) dp[3] = 4;
	for (let i = 4; i <= n; i++) {
		dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
	}
	return dp[n];
}

let t = 0;
let testCases = [];

rl.on('line', (line) => {
	if (t === 0) {
		t = parseInt(line);
	} else {
		testCases.push(parseInt(line));
		if (testCases.length === t) {
			for (let i = 0; i < t; i++) {
				console.log(solution(testCases[i]));
			}
			rl.close();
		}
	}
});

rl.on('close', () => {
	process.exit();
});
