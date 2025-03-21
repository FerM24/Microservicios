import { Request, Response } from 'express';
import { pool } from '../models/db';
import { ResultSetHeader } from 'mysql2';

// Obtener todos los usuarios
export const getAllUsuarios = async (req: Request, res: Response): Promise<void> => {
    try {
        const [rows] = await pool.query('SELECT * FROM productos');
        res.json(rows);
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
};

// Crear un nuevo usuario (POST)
export const postUsuario = async (req: Request, res: Response): Promise<void> => {
    try {
        console.log(req.body)
        const { nombre, precio, peso } = req.body;

        // Verificar si los campos requeridos están presentes
        if (!nombre || !precio || !peso) {
            res.status(400).json({ error: 'Faltan campos requeridos' });
            return;
        }

        const query = 'INSERT INTO productos (nombre, precio, peso) VALUES (?, ?, ?)';
        const [result] = await pool.query<ResultSetHeader>(query, [nombre, precio, peso]);

        if (result.affectedRows > 0) {
            res.status(201).json({ message: 'Usuario creado correctamente', id: result.insertId });
        } else {
            res.status(500).json({ error: 'No se pudo crear el usuario' });
        }
    } catch (error) {
        console.error('Error al crear usuario:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
};

// Modificar un usuario (PUT)
export const putUsuario = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id, nombre, precio, peso } = req.body;

        // Verificar si los campos requeridos están presentes
        if (!id || !nombre || !precio || !peso) {
            res.status(400).json({ error: 'Faltan campos requeridos' });
            return;
        }

        const query = 'UPDATE productos SET nombre = ?, precio = ?, peso = ? WHERE id = ?';
        const [result] = await pool.query<ResultSetHeader>(query, [nombre, precio, peso, id]);

        if (result.affectedRows > 0) {
            res.json({ message: 'Usuario actualizado correctamente' });
        } else {
            res.status(404).json({ error: 'Usuario no encontrado' });
        }
    } catch (error) {
        console.error('Error al modificar usuario:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
};

// Eliminar un usuario (DELETE)
export const deleteUsuario = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;

        console.log(`ID recibido: ${id}`); // Depuración: Verifica el ID recibido

        // Verificar si el ID está presente
        if (!id) {
            res.status(400).json({ error: 'ID no proporcionado' });
            return;
        }

        // Convertir el ID a número (si es necesario)
        const userId = parseInt(id, 10);

        if (isNaN(userId)) {
            res.status(400).json({ error: 'ID no válido' });
            return;
        }

        // Consulta SQL para eliminar un usuario
        const query = 'DELETE FROM productos WHERE id = ?'; // Cambia "productos" por "usuarios"
        console.log(`Consulta SQL: ${query}`); // Depuración: Verifica la consulta SQL

        // Ejecutar la consulta
        const [result] = await pool.query<ResultSetHeader>(query, [userId]);

        console.log(`Resultado de la consulta:`, result); // Depuración: Verifica el resultado

        // Verificar si se eliminó algún registro
        if (result.affectedRows > 0) {
            res.json({ message: 'Usuario eliminado correctamente' });
        } else {
            res.status(404).json({ error: 'Usuario no encontrado' });
        }
    } catch (error) {
        console.error('Error al eliminar usuario:', error); // Depuración: Verifica el error
        res.status(500).json({ error: 'Error en el servidor' });
    }
};
