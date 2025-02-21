import { Request, Response } from "express";

export const getAll = (req: Request, res: Response) => {
    const usuarios = [
        {
            id: "1",
            nombre: "Dr. Ana López",
            especialidad: "Neurología"
        },
        {
            id: "2",
            nombre: "Dr. Juan Osorio",
            especialidad: "Traumatología"
        }
    ];

    res.status(200).json(usuarios);
};