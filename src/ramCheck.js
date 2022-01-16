function checkRam () {
	const used = process.memoryUsage().heapUsed / 1024 / 1024;
	if (used > 1024 * 1) {
		console.log('process using: ' + used + 'mb. Exiting.');
		process.exit(0);
	}
}

setInterval(() => {
	checkRam();
}, 6000);

