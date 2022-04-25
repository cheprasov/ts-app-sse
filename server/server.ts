import express from 'express';
import cors from 'cors';
import { initRoutes } from './src/routers/routes';
import path from 'path';

const PORT = 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// quick fix
// todo: create controller & router
app.get('/', (req, res, next) => {
  res
    .status(200)
    .header({ 'Content-type': 'text/html' })
    .sendFile(path.resolve('../client/index.html'));
})

initRoutes(app);

app.listen(PORT, () => {
    console.log(`Service listening at http://localhost:${PORT}`)
});
