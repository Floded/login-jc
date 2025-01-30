"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getAllUsers = void 0;
const getAllUsers = (req, res) => {
    try {
        res.status(200).json({
            msg: "Logica para todos los usuarios",
        });
    }
    catch (error) {
        res.status(400).json({ msg: error });
    }
};
exports.getAllUsers = getAllUsers;
const getUserById = (req, res) => {
    const { id } = req.params;
    try {
        res.status(200).json({
            msg: "Logica para encontrar un usuario con el id recibido por parametros",
            id,
        });
    }
    catch (error) {
        res.status(400).json({ msg: error });
    }
};
exports.getUserById = getUserById;
const createUser = (req, res) => {
    const { body } = req;
    try {
        res.status(200).json({
            msg: "Logica para crear usuario con los datos recibidos por body",
            body,
        });
    }
    catch (error) {
        res.status(400).json({ msg: error });
    }
};
exports.createUser = createUser;
const updateUser = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        res.status(200).json({
            msg: "Logica para modificar un usuario con el id recibido por parametros",
            id,
            body,
        });
    }
    catch (error) {
        res.status(400).json({ msg: error });
    }
};
exports.updateUser = updateUser;
const deleteUser = (req, res) => {
    const { id } = req.params;
    try {
        res.status(200).json({
            msg: "Logica para borrar un usuario con el id recibido por parametros",
            id,
        });
    }
    catch (error) {
        res.status(400).json({ msg: error });
    }
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=users.controller.js.map