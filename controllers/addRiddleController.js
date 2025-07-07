import { AddRiddles } from '../services/addData.js'

export function AddRiddles(req, res) {
    try {
        let budy = ""
        req.on('data', chank => {
            budy += chank;
        });

        req.on('end', () => {
            AddRiddles(budy)
        });
        res.end("Successfully received on the server....")
    } catch (err) {
        console.log("invalid eroor: no added to server...");

    }

}