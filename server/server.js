import express from 'express';
import { Router } from './routes/router.js';

// this server .is import to file routers...
const PORT = 3000

const server = express()

server.use('/', Router)

server.listen(PORT, () => {
    console.log("listening...");

})

