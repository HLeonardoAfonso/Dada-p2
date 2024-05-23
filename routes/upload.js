// const express = require('express');
const multer = require('multer');
// const path = require('path');

const uploadRouter = require('express').Router();


const upload = multer({dest: "files/"});
// const storage = multer.diskStorage({
//   destination: 'files/', 
//   filename: (req , file , callback) => {
//     return callback (null, `${Date.now()}${path.extname(file.originalname)}`)
//   }
// })

// 'templates/artistPage.html', { root: "." }

// const upload = multer ({
//     storage : storage,

// })


uploadRouter.post('/',  upload.single('testing'), (req, res) => {
    // Send HTML as answer to HTTP request
    // console.log(req.file);
    res.send('uploaded successfully')
  });

module.exports = uploadRouter;