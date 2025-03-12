import { Router } from "express";
import { getAll } from "../Controllers/Usuarios.controllers";
import {pool} from '../models/db';


const router = Router();

// Endpoint de tipo GET: /products/all
// router.get("/all", getAll);

router.get('/all', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM productos');
        res.json(rows);
    } catch (error) {
        console.error('Error al obtener productos:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
});

export default router;