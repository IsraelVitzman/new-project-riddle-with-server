import { writeFile, readFile } from "node:fs/promises";

//this func` to add to file txt...
export async function AddData(data) {

    try {
        const filePath = "../data/riddles.txt"
        let listRiddle = []

        const riddles = await readFile(filePath, 'utf-8');

        if (data.length > 0) {
            listRiddle = JSON.parse(riddles);
        }


        listRiddle.push(data)

        await writeFile(filePath, JSON.stringify(listRiddle), "utf-8")
        console.log("seccussoflly added...");


    } catch (err) {
        console.log("invalid EROOR: no reading...", err);
    }
}


//AddData({ "jon": "k" }) הערות הושלם בהצחלה יכולת להוסיף כולל בדיקות ללא מחיקת המידע הקודם
