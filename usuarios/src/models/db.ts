import mysql from 'mysql2/promise';

export const pool = mysql.createPool({
    host: "172.23.221.101",
    port: 3306,
    user: "ferchis",
    password: "fernanda24!",
    database: "mi_tienda",
});

// Conexión a la base de datos
pool
    .query("SELECT 1")
    .then(() => console.log("Conectado a MySQL"))
    .catch((err: any) => {
        console.error("Error al conectar a MySQL:", err);
    });