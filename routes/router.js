import { AddRiddles } from '../controllers/addRiddleController.js';
import { GetRiddles } from '../controllers/getRiddlesController.js';

import express from 'express';
//this router: its router  server..
// its import and with  func addRiddles /GetRiddles is logic to rwite or add ...
export function Routers() {

    const router = express.Router()
    try {
        router.post('/add', (req, res) => {
            const body = req.body
            AddRiddles(req, res)
        })
        router.get('/read', (req, res) => {
            GetRiddles(req, res)
        })

    } catch (err) {
        console.log(err);
    }
    return router;
}