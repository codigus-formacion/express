import express from 'express';

const router = express.Router();

router.get('/enlace', (req, res) => {

    res.render('enlace', {
        nenlace: req.query.nenlace,
    });
});

export default router;