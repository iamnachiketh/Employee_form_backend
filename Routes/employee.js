const express = require('express');
const { createmployee } = require('../controllers/creatEmployee');
const { listEmployee } = require('../controllers/ListEmployee');
const { updateemployee } = require('../controllers/updateEmployee');
const { deleteemployee } = require('../controllers/deleteEmployee');
const { getemployee } = require('../controllers/getEmployee');
const router = express.Router();


router.post('/create',createmployee);
router.get('/listemployees',listEmployee);
router.put('/updateemployee/:email',updateemployee);
router.delete('/deleteemployee/:email',deleteemployee);
router.get('/getaemployee/:email',getemployee);


module.exports = router;