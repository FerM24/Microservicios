import { Router } from 'express';
import {getAllUsuarios,postUsuario,putUsuario,deleteUsuario} 
from '../Controllers/Usuarios.controllers';

const router = Router();

// Obtener todos los usuarios
router.get('/all', getAllUsuarios);

// Crear un nuevo usuario
router.post('/crear', postUsuario);

// Modificar un usuario
router.put('/modificar', putUsuario);

// Eliminar un usuario
router.delete('/eliminar:id', deleteUsuario);

export default router; // Asegúrate de exportar el enrutador