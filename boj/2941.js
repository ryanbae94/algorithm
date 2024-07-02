const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const CROATIAN = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

const solution = (input) => {
	let i = input;
	let count = 0;
	while (i.length !== 0) {
		if (i.length === 1) {
			count += 1;
			break;
		}
		if (CROATIAN.includes(i[0] + i[1])) {
			count += 1;
			i = i.slice(2);
		} else if (CROATIAN.includes(i[0] + i[1] + i[2])) {
			count += 1;
			i = i.slice(3);
		} else {
			count += 1;
			i = i.slice(1);
		}
	}

	return count;
};

const solution_2 = (input) => {
	let i = input;

	for (let alpha of CROATIAN) {
		i = i.split(alpha).join('T');
	}

	return i.length;
};
