import { writeFile, readFile } from "node:fs/promises";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


export async function AddData(data) {
    try {
        const filePath = join(__dirname, "../data/riddles.txt");

        let listRiddle = [];


        try {
            const riddles = await readFile(filePath, 'utf-8');
            if (riddles.length > 0) {
                listRiddle = JSON.parse(riddles);
            }
        } catch (err) {

            console.log("file is empty");
        }

        listRiddle.push(data);

        await writeFile(filePath, JSON.stringify(listRiddle, null, 2), "utf-8");
        console.log(" Successfully added riddle.");
    } catch (err) {
        console.log(" invalid Error: not write data...", err);
    }
}

