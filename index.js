const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: '', 
    database: 'mascotas' 
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Conectado a la base de datos');
});

app.post('/api/register', (req, res) => {
    const { nombre, correo, usuario, contrasena, confirmacion } = req.body;

    if (contrasena !== confirmacion) {
        return res.status(400).json({ message: 'Las contraseñas no coinciden' });
    }

    const sql = `INSERT INTO usuario (nombre_usuario, correo_usuario, apellido_usuario, contrasena) VALUES (?, ?, ?, ?)`;
    db.query(sql, [nombre, correo, usuario, contrasena], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error al registrar el usuario', error: err });
        }
        res.status(200).json({ message: 'Usuario registrado con éxito' });
    });
});

app.post('/api/login', (req, res) => {
    const { usuario, contrasena } = req.body;

    const sql = `SELECT * FROM usuario WHERE apellido_usuario = ? AND contrasena = ?`;
    db.query(sql, [usuario, contrasena], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error en la autenticación', error: err });
        }

        if (result.length > 0) {
            res.status(200).json({ message: 'Login exitoso', user: result[0] });
        } else {
            res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
        }
    });
});

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
