const StringBuilder = require("string-builder")

function toNumbers(buf) {
	let arr = new Uint8Array(buf);
	let len = arr.byteLength;
	let sb  = new StringBuilder();
	for (let i = 0; i < len; i++) {
		let b = arr[i];
		let str = b.toString().padStart(3, "0");
		sb.append(str);
	}
	return sb.toString();
}

function toData(nums) {
	let arr = Buffer.alloc(Math.ceil(nums.length / 3));
	let sb  = new StringBuilder();
	let sbLen = (s) => (s.s && s.s[0]) ? s.s.length : 0
	let count = 0
	for (let i = 0; i < nums.length; i++) {
		let c = nums[i];
		if (sbLen(sb) === 3) {
			let str = sb.toString();
			let num = parseInt(str);
			arr[count++] = num;
			sb = new StringBuilder();
		}
		sb.append(c);
	}
	return arr;
}

module.exports = {toData, toNumbers}