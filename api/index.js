const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const carRoutes = require('./routes/car-routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api', carRoutes.routes);

app.listen(config.port, () =>
  // eslint-disable-next-line no-console
  console.log(`App is listening on url http://localhost:${config.port}`)
);
