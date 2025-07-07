import { createServer } from "node:http";
import { router } from './routes/router.js';

const PORT = 3000

createServer(router).listen(PORT, () => {
    console.log("this lisining... to ..");

});
