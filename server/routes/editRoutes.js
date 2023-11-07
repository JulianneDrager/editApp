const express = require("express");
const router = express.Router();
const editDataController = require("../controllers/editDataController");  

router.get('/get', editDataController.getData);   
router.post('/post', editDataController.postData);  
router.get('/getid/:editId', editDataController.getEditId);
router.put('/update/:editId', editDataController.updatePost);
router.delete('/delete/:editId', editDataController.deletePost);

module.exports = router;