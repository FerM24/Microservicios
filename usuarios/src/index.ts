import express from "express";
import dotenv from "dotenv";
import usuariosRoutes from "./Routes/Usuarios.router";

dotenv.config({ path: "./src/.env" });
 
const app = express();
const port = process.env.PORT;  
// Usar las rutas de productos
app.use("/usuarios", usuariosRoutes);


app.listen(port,()=>{
  console.log("Mi primer Servicio de usuarios!: http://localhost:" + port +"/usuarios/all");
});
