import { ReadData } from '../services/readData.js'

export async function GetRiddles(req, res) {
    try {
        const data = await ReadData()
        res.end(data)
        console.log();

    } catch (err) {
        console.log("invalid eroor: ", err);

    }



}