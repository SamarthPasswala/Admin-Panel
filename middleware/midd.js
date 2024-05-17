const user = (req, res, next) => {
    const age = req.query.age

    if (age >= 18) {
        console.log("Valid User");
        next();
    } else {
        res.send("<h1>Your Age is Not Valid</h1>")
    }
}

module.exports = user
