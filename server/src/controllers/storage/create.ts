import { RequestHandler } from 'express';
import { isError } from '../../common/variables/variablesHelper';
import { HttpCodes } from '../../http/HttpCodes';
import { HttpResponse } from '../../http/HttpResponse';
import { StorageErrorCodes } from '../../services/storage/StorageErrorCodes';
import { StorageFactory } from '../../services/storage/StorageFactory';
import { isValueValid } from '../../validators/storageValidators';
import responseHelper from '../ResponseHelper';

const storage = StorageFactory.getStorage();

const create: RequestHandler = responseHelper((request, response, next) => {
    const key = request.params.key;
    const value = request.body.value;

    const valueCheckResult = isValueValid(key, value);
    if (isError(valueCheckResult)) {
        throw valueCheckResult;
    }

    const res = storage.add(key, value);

    if (res === true) {
        return new HttpResponse(HttpCodes.CREATED, '');
    }

    if (res.code === StorageErrorCodes.KEY_EXISTS) {
        return new HttpResponse(HttpCodes.CONFLICT, 'Already exists');
    }

    throw new Error(res.message);
});

export default create;