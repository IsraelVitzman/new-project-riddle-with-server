import { readFile } from "node:fs/promises";

//this func` to read to file txt...
export async function ReadData() {

    try {
        const filePath = "../data/riddles.txt"
        const data = await readFile(filePath, "utf-8")
        if (data.length === 0) {
            console.log("this empty..");
            return []
        }
        return JSON.parse(data)


    } catch (err) {
        console.log("invalid eroor : no reading..");
        return []
    }
}
// הצליח לקרוא בצורה מעולה ....
//const r = await ReadData()
//console.log(r);
