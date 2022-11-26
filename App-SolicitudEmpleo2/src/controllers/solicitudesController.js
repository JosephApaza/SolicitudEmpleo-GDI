const controller = {};

controller.opcs = (req, res) => {
    res.render('solicitudes');
};

controller.listFarm = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('CALL se_postulantes_farmacia()', (err, postFarmacia) => {
            if (err) {
                res.json(err);
            }
            res.render('solicitudesFarmacia', {
                postFarmacia: postFarmacia
            });
        });
    });
}

controller.listFarmMed = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('CALL se_postulantes_FarmaciaMedicina()', (err, postFarmaciaMedicina) => {
            if (err) {
                res.json(err);
            }
            res.render('solicitudesFarmMed', {
                postFarmaciaMedicina: postFarmaciaMedicina
            });
        });
    });
}

controller.listPostTitulo = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('CALL se_titulo_universitario()', (err, postTitulo) => {
            if (err) {
                res.json(err);
            }
            res.render('solicitudesPostTitulo', {
                postTitulo: postTitulo
            });
        });
    });
}

controller.listExpLaboral = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('CALL se_expLaboral_postulante();', (err, expLaboral) => {
            if (err) {
                res.json(err);
            }
            res.render('solicitudesExpLaboral', {
                expLaboral: expLaboral
            });
        });
    });
}

controller.listEnfPost = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('CALL se_nro_enfermedades();', (err, enfPost) => {
            if (err) {
                res.json(err);
            }
            res.render('solicitudesEnfPost', {
                enfPost: enfPost
            });
        });
    });
}

controller.listContactEmergen = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('CALL se_contacto_emergencia_postulante();', (err, contactEmergen) => {
            if (err) {
                res.json(err);
            }
            res.render('solicitudesContactEmergen', {
                contactEmergen: contactEmergen
            });
        });
    });
}

controller.listAreaContactRef = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('CALL se_areaLaboral_ContactRef();', (err, areaContactRef) => {
            if (err) {
                res.json(err);
            }
            res.render('solicitudesAreaContactRef', {
                areaContactRef: areaContactRef
            });
        });
    });
}

controller.listPostFem = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('CALL se_postulantes_femeninos();', (err, postFem) => {
            if (err) {
                res.json(err);
            }
            res.render('solicitudesPostFem', {
                postFem: postFem
            });
        });
    });
}

controller.listMenores30 = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('CALL se_postulantes_menores30();', (err, menores30) => {
            if (err) {
                res.json(err);
            }
            res.render('solicitudesMenores30', {
                menores30: menores30
            });
        });
    });
}

controller.listHijosPost = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('CALL se_hijos_postulante();', (err, hijosPost) => {
            if (err) {
                res.json(err);
            }
            res.render('solicitudesHijoPost', {
                hijosPost: hijosPost
            });
        });
    });
}

module.exports = controller;