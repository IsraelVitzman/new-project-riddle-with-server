import { ReadData } from '../services/readData.js'
//this func server logic to import data from file and send to user...
export async function GetRiddles(req, res) {
    try {
        const data = await ReadData()
        res.end(data)
        console.log();

    } catch (err) {
        console.log("invalid eroor: ", err);

    }

}