module.exports = app => {
    app.get('/',function (req, res) {
        res.render('home')
    });
    app.get('/ping',function (req, res) {
        res.render('home')
    });
}
