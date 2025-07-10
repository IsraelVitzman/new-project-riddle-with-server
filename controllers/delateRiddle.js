import { DelateData } from '../services/delateData.js';

export async function DelateRiddles(req, res) {
    try {
        const body = req.params.id
        await DelateData(body)
    } catch (err) {
        console.log("invalid eroor: no delated server...", err);

    }
}