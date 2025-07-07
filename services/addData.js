import { writeFile } from "node:fs/promises";

async function AddData(data) {
    const filePath = "../riddles.txt"
    try {
        await writeFile(filePath, JSON.stringify(data), "utf-8")
        console.log("seccussoflly added...");


    } catch (err) {
        console.log("invalid EROOR: no reading...", err);
    }
}
AddData({ "jon": "k" })

//הערות הבדיקה הושלמה בהצלחה נכתב 