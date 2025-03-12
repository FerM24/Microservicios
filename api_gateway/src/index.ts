import express from "express";
import dotenv from "dotenv";
import api_gatewayRoutes from "./Routes/api_gateway.router";

dotenv.config({ path: "./src/.env" });
 
const app = express();
const port = process.env.PORT;  
// Usar las rutas de productos
app.use("/api_gateway", api_gatewayRoutes);


app.listen(port,()=>{
  console.log("Mi primer Servicio de api_gateway!: http://localhost:" + port +"/api_gateway/all");
});
