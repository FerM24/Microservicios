import express from "express";
import dotenv from "dotenv";
import productosRouter from "./Routes/Productos.router";

dotenv.config({ path: "./src/.env" });
 
const app = express();
const port = process.env.PORT;  
// Usar las rutas de productos
app.use("/productos", productosRouter);


app.listen(port,()=>{
  console.log("Mi primer Servicio de productos!: http://localhost:" + port +"/productos/all");
});
