function addRiddles(req, res) {
    let budy = ""
    req.on('data', chank => {
        budy += chank;
    })
}