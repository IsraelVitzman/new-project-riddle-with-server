import { writeFile } from "node:fs/promises";

async function addData(data) {
    const filePath = "./riddles.txt"
    try {
        await writeFile(filePath, JSON.stringify(data), "utf-8")
        console.log("seccussoflly added...");


    } catch (err) {
        console.log("invalid EROOR: no reading...", err);
    }
}
addData({ "jon": "k" })