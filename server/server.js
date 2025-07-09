import express from 'express';
import { router } from './routes/router.js';

// this server .is import to file routers...
const PORT = 3000

const server = express()

server.use('/', router())

server.listen(PORT, () => {
    console.log("listening...");

})

