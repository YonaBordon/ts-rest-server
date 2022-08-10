import { Sequelize } from 'sequelize';

// NOTE: Conectando con db

const db = new Sequelize('testingNode', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',

  // logging:false
});

export default db;
