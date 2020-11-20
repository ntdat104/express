module.exports.index = (req, res, next) => {
    res.render('user', { title: "User" });
}