import express from 'express';
import multer from 'multer';

import * as boardService from './boardService.js';

const router = express.Router();

const upload = multer({ dest: 'uploads/' })

router.get('/', (req, res) => {

    res.render('index', { 
        posts: boardService.getPosts() 
    });
});

router.post('/post/new', upload.single('image'), (req, res) => {

    let { user, title, text } = req.body;

    let imageFilename = req.file.filename;

    boardService.addPost({ user, title, text, imageFilename });

    res.render('saved_post');
});

router.get('/post/:id', (req, res) => {

    let post = boardService.getPost(req.params.id);

    res.render('show_post', { post });
});

router.get('/post/:id/delete', (req, res) => {

    boardService.deletePost(req.params.id);

    res.render('deleted_post');
});

router.get('/post/:id/image', (req, res) => {

    let post = boardService.getPost(req.params.id);

    res.download('uploads/' + post.imageFilename);

});

export default router;