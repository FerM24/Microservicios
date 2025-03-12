import express from "express";
import dotenv from "dotenv";
import api_gatewayRoutes from "./Routes/api_gateway.router";
import axios from "axios";

dotenv.config({ path: "./src/.env" });
 
const app = express();
const port = process.env.PORT;  
// Usar las rutas de productos
//app.use("/api_gateway", api_gatewayRoutes);
app.get("/productos", async (req, res) => {
  try { 
    const response = await axios.get("http://localhost:3001/productos/all"); 
    res.json(response.data);
  } catch (error) {
    console.error("Error al obtener productos:", error);
    res.status(500).send("Error al obtener productos");
  }
});

// Redirigir a usuarios
app.get("/usuarios", async (req, res) => {
  try {
    const response = await axios.get("http://localhost:3003/usuarios/all");
    res.json(response.data); 
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    res.status(500).send("Error al obtener usuarios");
  }
});


app.listen(port,()=>{
  console.log("Mi primer Servicio de api_gateway!: http://localhost:" + port +"/api_gateway/all");
});

