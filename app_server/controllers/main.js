/* GET homepage */
const index = (req, res) => {
    res.render('index', { title: 'Travkr Getaways' });
};


module.exports = {
    index
};