const express  = require('express');
const cors = require('cors');

const routes = require('./Routes');

const server = express();
server.use(express.json());
server.use(cors({
  origin: '*'
}));

server.use(routes);

const port = 3001;

server.listen(port, () => console.log(`LISTENING AT ${port}`,"\n🚀  IGNITE 🚀 "));