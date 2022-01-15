const Influx = require('influx');
/*
const influxClient = new Influx.InfluxDB({
	host: process.env.INFLUX_HOST,
	database: process.env.INFLUX_DB,
	username: process.env.INFLUX_USER,
	password: process.env.INFLUX_PASSWORD,
	schema: [
		{
			measurement: 'commands',
			fields: {
				count: Influx.FieldType.INTEGER
			},
			tags: [
				'command',
				'user'
			]
		}
	]
});
*/

let pickle = {};

exports.addCommandData = function(req,res){
	res.sendStatus(200);
	/*
	if(req.body.password!=process.env.PASSWORD) {
		res.sendStatus(400);
		return;
	}

	const { user, command } = req.body;
	if (!user || !command) {
		res.sendStatus(400);
		return;
	}

	if (!pickle[user]) pickle[user] = {};
	if (!pickle[user][command]) pickle[user][command] = {count: 0};
	pickle[user][command].count++;

	res.sendStatus(200);
	*/
};

/*
function sendPickle() {
	const tempPickle = pickle;
	pickle = {};
	const pickleMsg = []

	for (let user in tempPickle) {
		for (let command in tempPickle[user]) {
			const count = tempPickle[user][command].count;
			pickleMsg.push({
				measurement: 'commands',
				tags: { command, user },
				fields: { count }
			});
		}
	}

	if (pickleMsg.length) {
		influxClient.writePoints(pickleMsg).then(() => {
			console.log(`Sent ${pickleMsg.length} data`);
		}).catch(err => {
			console.error(err);
		});;
	}

}

setInterval(sendPickle,5000);
*/


