const express = require('express');
const { createmployee } = require('../controllers/creatEmployee');
const { listEmployee } = require('../controllers/ListEmployee');
const { updateemployee } = require('../controllers/updateEmployee');
const { deleteemployee } = require('../controllers/deleteEmployee');
const router = express.Router();


router.post('/create',createmployee);
router.get('/listemployees',listEmployee);
router.put('/updateemployee/:email',updateemployee);
router.delete('/deleteemployee/:email',deleteemployee);


module.exports = router;