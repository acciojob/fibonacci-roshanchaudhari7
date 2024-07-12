function fibonacci(num) {
// your code here
	if(num < 0) {
	    return "Invalid Input";
	}
	if(num === 0) {
		return 0;
	}
	if(num === 1) {
	    return 0;
	}
	if(num === 2) {
	    return 1;
	}
	let x = 0;
	let y = 1;
	for(let i = 3; i <= num; i++) {
	    let temp = x + y;
	    x = y;
	    y = temp;
	}
	return y;
}

module.exports = fibonacci;
