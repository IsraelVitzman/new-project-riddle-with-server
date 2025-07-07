export function Riddles(riddles) {
    const startTime = time();

    for (const riddle of riddles) {
        Riddle(riddle);
    }

    const endTime = time();
    addTimeForAllRidders(returnTime(startTime, endTime));
}