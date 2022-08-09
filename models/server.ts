import express, { Application } from 'express';
import userRoutes from '../routes/user';
import cors from 'cors';

import db from '../db/connections';

class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    users: '/api/usuarios',
  };
  constructor() {
    this.app = express();
    this.port = process.env.PORT || '8000';

    // NOTE: Metodos iniciales
    this.dbConnection();
    this.middlewares();
    this.routes();
  }

  // NOTE: Conectar DB
  async dbConnection() {
    try {
      await db.authenticate();
      console.log('DB ONLINE');
    } catch (error: any) {
      throw new Error(error);
    }
  }

  middlewares() {
    // NOTE: CORS
    this.app.use(cors());
    // NOTE: Lectura Body
    this.app.use(express.json());
    // NOTE: Public
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use(this.apiPaths.users, userRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Servidor corriendo en ' + this.port);
    });
  }
}

export default Server;
