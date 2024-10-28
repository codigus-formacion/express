import express from 'express';
import multer from 'multer';

const router = express.Router();

const upload = multer({ dest: 'uploads/' })

let filename;

router.post('/upload_image', upload.single('image'), (req, res) => {

    if (req.file) {
        filename = req.file.filename;
        res.render('uploaded_image', { filename });
    } else {
        res.send('File not found!');
    }

});

router.get('/view_image', (req, res) => {

    res.render('view_image', { filename });

});

router.get('/download_image', (req, res) => {

    res.download('uploads/' + filename);

});

export default router;
