import { writeFile, readFile } from "node:fs/promises";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';



const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


export async function DelateData(id) {
    try {
        const filePath = join(__dirname, "../data/riddles.txt");

        let listReadRiddle = [];
        let listAddRiddle = [];

        const riddles = await readFile(filePath, 'utf-8');
        if (id === "all") { }

        else if (riddles.length > 0) {
            listReadRiddle = JSON.parse(riddles);
            for (let i = 0; i < listReadRiddle.length; i++) {

                if (listReadRiddle[i].id !== id) {
                    listAddRiddle.push(listReadRiddle[i])
                }

            }

        }
        console.log("seccussofly delated...");

        await writeFile(filePath, JSON.stringify(listAddRiddle, null, 2), "utf-8");

    } catch (err) {
        console.log(" invalid error: not write data...", err);
    }
}
// עובד מצויין
// DelateData('12')
