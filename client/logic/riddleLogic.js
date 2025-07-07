export function Riddle(riddle) {
    const startTime = time();
    QuestionsManager(riddle)
    const endAskTime = time();
    addSecondsForQuestion(returnTime(startTime, endAskTime));
}