function f() {
	var n, base, i, digit;
	const num = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

	n = document.getElementById("n").value;
	base = document.getElementById("base").value;
	document.getElementById("result").innerHTML = "";
	
	if (n < 0) {
		n = -n;
		document.getElementById("result").append('-');
	} else if (n == 0) {
		document.getElementById("result").innerHTML = "0";
		return;
	}

	for (i = 1; 1; i++) {
		if (Math.pow(base, i) <= n && Math.pow(base, i + 1) > n) {
			break;
		}
	}

	for (; i >= 0; i--) {
		digit = 0;
		while (n >= Math.pow(base, i)) {
			n -= Math.pow(base, i);
			digit++;
		}
		document.getElementById("result").append(num[digit]);
	}
}