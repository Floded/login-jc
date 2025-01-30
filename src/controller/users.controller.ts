import { Request, Response } from "express";

export const getAllUsers = (req: Request, res: Response) => {
  try {
    res.status(200).json({
      msg: "Logica para todos los usuarios",
    });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

export const getUserById = (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    res.status(200).json({
      msg: "Logica para encontrar un usuario con el id recibido por parametros",
      id,
    });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

export const createUser = (req: Request, res: Response) => {
  const { body } = req;
  try {
    res.status(200).json({
      msg: "Logica para crear usuario con los datos recibidos por body",
      body,
    });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

export const updateUser = (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  try {
    res.status(200).json({
      msg: "Logica para modificar un usuario con el id recibido por parametros",
      id,
      body,
    });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

export const deleteUser = (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    res.status(200).json({
      msg: "Logica para borrar un usuario con el id recibido por parametros",
      id,
    });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};
