import express from 'express';

const router = express.Router();

router.get('/greeting', (req, res) => {

    res.render('greeting', {
        name: req.query.userName,
        country: req.query.country
    });
});

router.post('/login', (req, res) => {

    let correctPassword = "1234"
    res.render('login', {
        success: req.body.password === correctPassword,
        name: req.body.userName,
    });
});

export default router;