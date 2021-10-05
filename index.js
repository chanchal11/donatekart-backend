const app = require('./app');

function init() {
	app.listen(5000, () => {
		console.log(`API Server started.`);
	});
}

init();