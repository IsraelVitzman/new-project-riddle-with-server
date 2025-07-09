import { AddData } from '../services/addData.js'

//this func server logic to import data from user and send to file .txt...
export async function AddRiddles(req, res) {
    try {
        const body = req.body
        await AddData(body)
        res.end("Successfully received on the server....")
    } catch (err) {
        console.log("invalid eroor: no added to server...");

    }

}