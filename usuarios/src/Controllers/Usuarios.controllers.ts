import { Request, Response } from "express";

export const getAll = (req: Request, res: Response) => {
    // res.send("lista de productos");
    res.status(200).json({ Hola: "Usuarios" });
    
};

//Q