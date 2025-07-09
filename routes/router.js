import { AddRiddles } from '../controllers/addRiddleController.js';
import { GetRiddles } from '../controllers/getRiddlesController.js';

import express from 'express';
//this router: its router  server..
// its import and with  func addRiddles /GetRiddles is logic to rwite or add ...
export function Router() {

    const router = express.Router();
    try {
        router.get('/read', (req, res) => {
            const body = req.body
            AddRiddles(req, res, body)
        })
        router.post('/read', (req, res) => {
            GetRiddles(req, res)
        })

    } catch (err) {
        console.log(err);
    }

}