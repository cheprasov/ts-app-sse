import { RequestHandler } from 'express';
import { HttpCodes } from '../../http/HttpCodes';
import { HttpResponse } from '../../http/HttpResponse';
import { isStorageError } from '../../services/storage/StorageError';
import { StorageFactory } from '../../services/storage/StorageFactory';
import responseHelper from '../ResponseHelper';

const storage = StorageFactory.getStorage();

const read: RequestHandler = responseHelper((request, response, next) => {
    const value = storage.get(request.params.key);

    if (isStorageError(value)) {
        throw new Error(value.message);
    }

    if (value === undefined) {
        return new HttpResponse(HttpCodes.NO_CONTENT, '');
    }

    return new HttpResponse(HttpCodes.OK, value);
});

export default read;
