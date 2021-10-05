const app = require('./app');

function init() {
	app.listen(process.env.PORT || 5000, () => {
		console.log(`API Server started.`);
	});
}

init();