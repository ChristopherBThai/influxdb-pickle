const Winston = require('winston');
const WinstonLogStash = require('winston3-logstash-transport');

const logger = Winston.createLogger();

logger.add(new WinstonLogStash({
	mode: 'udp',
	host: process.env.ELK_HOST,
	port: process.env.ELK_PORT,
	maxConnectRetries: -1,
	formatted: false
}));

exports.addCommandData = function (req,res) {
	if (req.body.password!=process.env.PASSWORD) {
		res.sendStatus(400);
		return;
	}

	const metric  = req.body;
	const text = metric.text;

	metric.timestamp = new Date().toISOString();
	delete metric.file;
	delete metric.test;
	delete metric.password;

	if (metric.command == "points") {
		delete metric.text;
	}
 
	logger.info(JSON.stringify(metric));

	res.sendStatus(200);
};

exports.addCaptchaData = function (req, res) {
	if (req.body.password!=process.env.PASSWORD) {
		res.sendStatus(400);
		return;
	}

	const metric  = req.body;
	const text = metric.text;

	metric.timestamp = new Date().toISOString();
	metric.file = "captcha";
	delete metric.test;
	delete metric.password;

	logger.info(JSON.stringify(metric));

	res.sendStatus(200);
};
