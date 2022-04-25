import express from 'express';
import create from '../controllers/storage/create';
import read from '../controllers/storage/read';
import remove from '../controllers/storage/remove';
import sseStream from '../controllers/storage/sseStream';
import update from '../controllers/storage/update';

export const router = express.Router();

router.get('/stream/sse/', sseStream);

// CRUD
router.get(`/:key([a-z0-9_]+)`, read);
router.post('/:key([a-z0-9_]+)', update);
router.put('/:key([a-z0-9_]+)', create);
router.delete('/:key([a-z0-9_]+)', remove);