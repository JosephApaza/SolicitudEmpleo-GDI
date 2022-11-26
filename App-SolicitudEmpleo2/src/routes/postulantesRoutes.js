const express = require('express');
const router = express.Router();

const postulantesController = require('../controllers/postulantesController');

router.get('/', postulantesController.list);
router.post('/add', postulantesController.save);
router.get('/delete/:CodP', postulantesController.delete);
router.post('/edit/:CodP', postulantesController.update);
router.get('/edit/:CodP', postulantesController.edit);


module.exports = router;