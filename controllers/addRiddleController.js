import { AddRiddles } from '../services/addData.js'
//this func server logic to import data from user and send to file .txt...
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