import { Router } from "express";
import { getAll } from "../Controllers/Usuarios.controllers";

const router = Router();

// Endpoint de tipo GET: /products/all
router.get("/all", getAll);

export default router;