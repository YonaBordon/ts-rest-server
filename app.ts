import dotenv from 'dotenv';
import Server from './models/server';

// NOTE: configurar dotenv
dotenv.config();

const server = new Server();

server.listen();
