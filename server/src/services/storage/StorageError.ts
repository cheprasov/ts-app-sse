import { StorageErrorCodes } from './StorageErrorCodes';

export const isStorageError = (value: any): value is StorageError => {
    return value instanceof StorageError;
}

export class StorageError extends Error {

    readonly code: StorageErrorCodes;

    constructor(code: StorageErrorCodes, message: string = '') {
        super(message);

        this.code = code;
    }

}
