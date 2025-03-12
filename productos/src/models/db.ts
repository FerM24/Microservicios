import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config({ path: './src/.env' });

// Crear el pool de conexiones
export const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'mi_tienda',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Verificar conexión con MySQL
(async () => {
    try {
        const connection = await pool.getConnection();
        console.log('✅ Conectado a MySQL');
        connection.release();
    } catch (err) {
        console.error('❌ Error conectando a MySQL:', err);
    }
})();

// Manejar errores en la conexión
pool.on('error', (err) => {
    console.error('⚠️ Error en la conexión MySQL:', err);
});

    