const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);
const items = input.slice(1).map((line) => line.split(' ').map(Number));

function solution(N, K, items) {
	const dp = Array.from({ length: N + 1 }, () => Array(K + 1).fill(0));

	for (let i = 1; i <= N; i++) {
		for (let w = 0; w <= K; w++) {
			if (items[i - 1][0] <= w) {
				dp[i][w] = Math.max(
					dp[i - 1][w],
					dp[i - 1][w - items[i - 1][0]] + items[i - 1][1]
				);
			} else {
				dp[i][w] = dp[i - 1][w];
			}
		}
	}

	return dp[N][K];
}

console.log(solution(N, K, items));
