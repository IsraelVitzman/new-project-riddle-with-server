import { readFile } from "node:fs/promises";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function ReadData() {
    try {
        const filePath = join(__dirname, "../data/riddles.txt");
        const data = await readFile(filePath, "utf-8");
        if (data.length === 0) {
            console.log("this empty..");
            return [];
        }
        return JSON.parse(data);
        
    } catch (err) {
        console.log("invalid error : no reading..", err);
        return [];
    }
}
// const r = await ReadData()
// console.log(r);

