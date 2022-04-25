import { RequestHandler, Response } from 'express';
import { StorageFactory } from '../../services/storage/StorageFactory';
import { OnChangeCallback } from '../../services/storage/StorageInf';

interface ClientInf {
    response: Response;
    observer: OnChangeCallback;
}

const SseHeaders = {
    'Content-Type': 'text/event-stream',
    'Connection': 'keep-alive',
    'Cache-Control': 'no-cache'
};

const storage = StorageFactory.getStorage();

const sseStream: RequestHandler = async (request, response, next) => {
    response.writeHead(200, SseHeaders);

    const client: ClientInf = {
        response,
        observer: (event) => {
            response.write('data:' + JSON.stringify(event) + '\n\n');
        }
    };

    storage.addObserver(client.observer);
    request.on('close', () => {
        response.end();
        storage.removeObserver(client.observer);
    });
}

export default sseStream;