import { RequestHandler } from 'express';
import { HttpCodes } from '../../http/HttpCodes';
import { HttpResponse } from '../../http/HttpResponse';
import { StorageFactory } from '../../services/storage/StorageFactory';
import responseHelper from '../ResponseHelper';

const storage = StorageFactory.getStorage();

const remove: RequestHandler = responseHelper((request, response, next) => {
    const res = storage.delete(request.params.key)

    if (res === true) {
        return new HttpResponse(HttpCodes.OK, 'Deleted');
    }

    throw new Error(res.message);
});

export default remove;
