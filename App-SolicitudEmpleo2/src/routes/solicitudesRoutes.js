const express = require('express');
const router = express.Router();

const solicitudesController = require('../controllers/solicitudesController');

router.get('/', solicitudesController.opcs);

router.get('/farmacia', solicitudesController.listFarm);

router.get('/farmacia/Medicina', solicitudesController.listFarmMed);

router.get('/titulo/universitario', solicitudesController.listPostTitulo);

router.get('/experiencia-laboral', solicitudesController.listExpLaboral);

router.get('/enfermedad-postulante', solicitudesController.listEnfPost);

router.get('/contactoemergencia-postulante', solicitudesController.listContactEmergen);

router.get('/arealaboral/contactoreferencia', solicitudesController.listAreaContactRef);

router.get('/postulantes/femeninos', solicitudesController.listPostFem);

router.get('/postulantes/menores-30', solicitudesController.listMenores30);

router.get('/postulantes/hijos', solicitudesController.listHijosPost);

module.exports = router;