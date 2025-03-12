import express from 'express';
import dotenv from 'dotenv';
import productosRouter from './Routes/Productos.router.js'; // Ruta de productos
import { pool } from './models/db.js'; // Importar conexión a MySQL

// Cargar variables de entorno
dotenv.config({ path: './src/.env' });

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Middleware para JSON

// Usar las rutas de productos
app.use('/productos', productosRouter);

// Iniciar el servidor
app.listen(port, async () => {
    try {
        // Verificar conexión con MySQL antes de iniciar
        const connection = await pool.getConnection();
        connection.release();
        console.log(`🚀 Servidor corriendo en: http://localhost:${port}/productos/all`);
    } catch (err) {
        console.error('❌ No se pudo conectar a MySQL:', err);
    }
});
