import { RequestHandler } from 'express';
import { isError } from '../../common/variables/variablesHelper';
import { HttpCodes } from '../../http/HttpCodes';
import { HttpResponse } from '../../http/HttpResponse';
import { StorageErrorCodes } from '../../services/storage/StorageErrorCodes';
import { StorageFactory } from '../../services/storage/StorageFactory';
import { isValueValid } from '../../validators/storageValidators';
import responseHelper from '../ResponseHelper';

const storage = StorageFactory.getStorage();

const update: RequestHandler = responseHelper((request, response, next) => {
    const key = request.params.key;
    const value = request.body.value;

    const valueCheckResult = isValueValid(key, value);
    if (isError(valueCheckResult)) {
        throw valueCheckResult;
    }

    const resp = storage.set(key, value);

    if (resp === true) {
        return new HttpResponse(HttpCodes.OK, 'Updated');
    }

    if (resp.code === StorageErrorCodes.KEY_NOT_EXIST) {
        return new HttpResponse(HttpCodes.NO_CONTENT, resp.message);
    }

    throw new Error(resp.message);
});

export default update;