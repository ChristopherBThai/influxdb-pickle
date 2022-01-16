require('dotenv').config()

const express = require('express');
const app = express();
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

const influxdb = require('./src/influxdb.js');
const logstash = require('./src/logstash.js');
const ramCheck = require('./src/ramCheck.js');

app.post('/command', influxdb.addCommandData);
app.post('/metric', logstash.addCommandData);
app.post('/captcha', logstash.addCaptchaData);

app.listen(process.env.PORT, () => {
	console.log(`InfluxDB Pickler listening on ${process.env.PORT}`);
});

if (!+process.env.PORT) {
	const fs = require('fs');

	process.on('SIGINT', () => {
		process.exit();
	});

	process.on('exit', () => {
		try {
			fs.unlinkSync(process.env.PORT);
		} catch(err) {
			console.error(err);
		}
	});
}
