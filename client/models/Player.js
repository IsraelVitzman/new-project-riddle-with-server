//this func' to add to list players 
list = []
export function Player(name, aveTime, allTime) {
    Player.list.push({ "name": name, "aveTime": aveTime, "allTime": allTime })
}


export function getList() {
    return Player.list
}


