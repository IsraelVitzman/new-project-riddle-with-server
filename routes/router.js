import { addRiddles } from '../controllers/addRiddleController.js'


export function router(req, res) {
    const metode = req.metode;
    const url = req.url;
    try {
        if (metode === 'POST' && url === '/add') {
            addRiddles(req, res)
        }
        else if (metode === 'GET' && url === '/read') {

        }
        else {
            console.log("invalid error: bekos ist no GET/POST");
        }

    } catch (err) {
        console.log(err);
    }

}