"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.putUser = exports.postUser = exports.getUser = exports.getUsers = void 0;
const getUsers = (req, res) => {
    res.json({ msg: 'getUsers' });
};
exports.getUsers = getUsers;
const getUser = (req, res) => {
    const { id } = req.params;
    res.json({ id, msg: 'getUser' });
};
exports.getUser = getUser;
const postUser = (req, res) => {
    const { body } = req;
    res.json({ msg: 'posttUsers', body });
};
exports.postUser = postUser;
const putUser = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({ id, msg: 'putUsers', body });
};
exports.putUser = putUser;
const deleteUser = (req, res) => {
    const { id } = req.params;
    res.json({ id, msg: 'deletetUsers' });
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=users.js.map