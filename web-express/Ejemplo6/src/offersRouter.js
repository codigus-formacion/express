import express from 'express';

const router = express.Router();

router.get('/ofertas/:city', (req, res) => {

    res.render('offers', {
        city: req.params.city,
    });
});

export default router;