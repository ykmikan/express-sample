const app = require('./src/server');
const config = require('@config')

app.listen(config.port);
