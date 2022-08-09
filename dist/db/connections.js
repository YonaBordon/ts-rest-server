"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// NOTE: Conectando con db
const db = new sequelize_1.Sequelize('testingNode', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    // logging:false
});
exports.default = db;
//# sourceMappingURL=connections.js.map