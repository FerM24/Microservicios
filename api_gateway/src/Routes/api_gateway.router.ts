import { Router } from "express";
import { getAll } from "../Controllers/api_gateway.controllers";

const router = Router();

// Endpoint de tipo GET: /products/all
router.get("/all", getAll);

export default router;