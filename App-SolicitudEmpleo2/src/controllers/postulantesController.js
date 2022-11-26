const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('CALL se_lista_postulantes()', (err, postulantes) => {
            if (err) {
                res.json(err);
            }
            res.render('postulantes', {
                postulantes: postulantes
            });
        });
    });
};

controller.save = (req, res) => {
    const { Codigo, DNI, Nombres, Apellidos, Sexo, Edad, Celular, TelFijo, Direccion, EstadoCiv, NroHijos, TipoSangre, Calificacion, NumSolicitud, Descpersonal, Apto, DNICont, NombresCont, ApellidosCont, CelularCont, DireccionCont, Vinculo, Area, Nivel, AreaLab, FechaIni, FechaFin, CelRef, EmailRef } = req.body;
    req.getConnection((err, conn) => {
        conn.query('CALL se_registrar_postulante("' + Codigo + '","' + DNI + '","' + Nombres + '","' + Apellidos + '","' + Sexo + '",' + Edad + ',"' + Celular + '","' + TelFijo + '","' + Direccion + '","' + EstadoCiv + '",' + NroHijos + ',"' + TipoSangre + '","' + Calificacion + '","' + NumSolicitud + '","' + Descpersonal + '",' + Apto + ',"' + DNICont + '","' + NombresCont + '","' + ApellidosCont + '","' + CelularCont + '","' + DireccionCont + '","' + Vinculo + '",' + Area + ',' + Nivel + ',' + AreaLab + ',"' + FechaIni + '","' + FechaFin + '","' + CelRef + '","' + EmailRef + '");', {
            Codigo, DNI, Nombres, Apellidos, Sexo, Edad, Celular, TelFijo, Direccion, EstadoCiv, NroHijos, TipoSangre, Calificacion, NumSolicitud, Descpersonal, Apto, DNICont, NombresCont, ApellidosCont, CelularCont, DireccionCont, Vinculo, Area, Nivel, AreaLab, FechaIni, FechaFin, CelRef, EmailRef
        }, (err, postulante) => {
            if (err) {
                console.log('No se ha podido registrar al postulante');
                res.redirect('/postulantes');
            } else {
                if (NroHijos >= 1) {
                    console.log('Se ha registrado un nuevo postulante.');
                    res.redirect('/hijos');
                }
                console.log('Se ha registrado un nuevo postulante.');
                res.redirect('/postulantes');
            }
        });
    });
};

controller.edit = (req, res) => {
    const { CodP } = req.params;
    req.getConnection((err, conn) => {
        conn.query('CALL se_consulta_postulante("' + CodP + '");', (err, postulantes) => {
            console.log(postulantes)
            res.render('postulantes_edit', {
                postulantes: postulantes
            });
        });
    });
};

controller.update = (req, res) => {
    const { Codigo, DNI, Nombres, Apellidos, Sexo, Edad, Celular, TelFijo, Direccion, EstadoCiv, NroHijos, TipoSangre, Calificacion, NumSolicitud, Descpersonal, Apto, DNICont, NombresCont, ApellidosCont, CelularCont, DireccionCont, Vinculo, Area, Nivel, AreaLab, FechaIni, FechaFin, CelRef, EmailRef } = req.body;
    req.getConnection((err, conn) => {
        conn.query('CALL se_editar_postulante("' + Codigo + '","' + DNI + '","' + Nombres + '","' + Apellidos + '","' + Sexo + '",' + Edad + ',"' + Celular + '","' + TelFijo + '","' + Direccion + '","' + EstadoCiv + '",' + NroHijos + ',"' + TipoSangre + '","' + Calificacion + '","' + NumSolicitud + '","' + Descpersonal + '",' + Apto + ',"' + DNICont + '","' + NombresCont + '","' + ApellidosCont + '","' + CelularCont + '","' + DireccionCont + '","' + Vinculo + '",' + Area + ',' + Nivel + ',' + AreaLab + ',"' + FechaIni + '","' + FechaFin + '","' + CelRef + '","' + EmailRef + '");', {
            Codigo, DNI, Nombres, Apellidos, Sexo, Edad, Celular, TelFijo, Direccion, EstadoCiv, NroHijos, TipoSangre, Calificacion, NumSolicitud, Descpersonal, Apto, DNICont, NombresCont, ApellidosCont, CelularCont, DireccionCont, Vinculo, Area, Nivel, AreaLab, FechaIni, FechaFin, CelRef, EmailRef
        }, (err, postulante) => {
            if (err) {
                console.log('No se ha podido editar al postulante');
                res.redirect('/postulantes');
            } else {
                console.log('Se ha editado al postulante.');
                res.render('postulantes');
            }
        });
    });
};

controller.delete = (req, res) => {
    const CodP = req.params.CodP;
    req.getConnection((err, conn) => {
        conn.query('CALL se_borrar_postulante(' + CodP + ');', (err, rows) => {
            console.log('Se ha borrado el postulante con Código: '+CodP)
            res.redirect('/postulantes');
        });
    });
};

module.exports = controller;
