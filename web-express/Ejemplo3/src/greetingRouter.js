import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {

    res.render('index', {
        name: "World"
    });
});

router.get('/cond', (req, res) => {
    res.render('conditional', {
        name: "World",
        hello: true
    });
});

router.get('/list', (req, res) => {
    res.render('lista', {
        colors: ["red", "green", "blue"]
    });
});

router.get('/object', (req, res) => {
    res.render('object', {
        name: {
            first: "Michael",
            last: "Jackson"
        }
    });
});

router.get('/beatles', (req, res) => {
    res.render('beatles', {
        beatles: [
            { firstName: "John", lastName: "Lennon" },
            { firstName: "Paul", lastName: "McCartney" },
            { firstName: "George", lastName: "Harrison" },
            { firstName: "Ringo", lastName: "Starr" }
        ],
        name: function () {
            return this.firstName + " " + this.lastName;
        }
    });
});

export default router;