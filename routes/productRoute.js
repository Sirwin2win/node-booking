const express = require('express');
const router = express.Router();
const fs = require('fs')
const {
    getProducts,
    getProduct,
    createProduct,
    updatedProduct,
    deleteProduct
}= require('../controllers/productController.js');
const multer  = require('multer')
// const upload = multer({ dest: 'uploads/' })

const storage = multer.diskStorage({
    destination: "uploads",
    filename:(req, file, cb)=>{
        return cb(null, `${Date.now()}${file.originalname}`)
    }
});
const upload = multer({ storage: storage });


router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/',upload.single('image'), createProduct);
router.put('/:id', updatedProduct);
router.delete('/:id', deleteProduct);




module.exports = router;