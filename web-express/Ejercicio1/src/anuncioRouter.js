import express from 'express';

const router = express.Router();

router.post('/nuevo', (req, res) => {

    res.render('anuncio', {
        name: req.body.name,
        subject: req.body.subject,
        comment: req.body.comment
    });
});

export default router;