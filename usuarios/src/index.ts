import express from "express";
import dotenv from "dotenv";
import productosRouter from "./Routes/Usuarios.router";

dotenv.config({ path: "./src/.env" });
 
const app = express();
const port = process.env.PORT;  
// Usar las rutas de productos
app.use("/usuarios", productosRouter);


app.listen(port,()=>{
  console.log("Mi primer Servicio de Usuarios!: http://localhost:" + port +"/usuarios/all");
});
