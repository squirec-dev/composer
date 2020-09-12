module.exports = app => {
    app.get('/new', (req, res) => {
        res.send('I am a new route');
    });
}
