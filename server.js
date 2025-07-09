import express from 'express';
import { Routers } from './routes/router.js';

// this server .is import to file routers...
const PORT = process.env.PORT || 3000;

const server = express()
server.use(express.json())

server.use('/', Routers())

server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is listening ...`);
});

