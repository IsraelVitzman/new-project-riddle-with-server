import { addRiddles } from '../controllers/addRiddleController.js';
import { GetRiddles } from '../controllers/getRiddlesController.js';

export function router() {
    const metode = req.metode;
    const url = req.url;
    try {
        if (metode === 'POST' && url === '/add') {
            addRiddles(req, res)
        }
        else if (metode === 'GET' && url === '/read') {
            GetRiddles(req, res)
        }
        else {
            console.log("invalid error: bekose ist no GET/POST");
        }

    } catch (err) {
        console.log(err);
    }

}