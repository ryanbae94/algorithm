let input = Number(
	require('fs').readFileSync('dev/stdin').toString().split(' ')
);

const MOD = 10007;

function solution(n) {
	let dp = new Array(n + 1);
	dp[1] = 1;
	if (n > 1) dp[2] = 3;
	for (let i = 3; i <= n; i++) {
		dp[i] = (dp[i - 1] + 2 * dp[i - 2]) % MOD;
	}
	return dp[n];
}

console.log(solution(input));
