import { EventSource } from '../../../common/observer/EventSource';
import { Maybe } from '../../../common/types/Maybe';
import { StorageError } from '../StorageError';
import { StorageErrorCodes } from '../StorageErrorCodes';
import { EventParams, StorageInf } from '../StorageInf';

export default class MemoryStorage<T> extends EventSource<EventParams<T>> implements StorageInf<T> {

    protected _map = new Map<string, T>();

    get(key: string): Maybe<T> {
        return this._map.get(key);
    }

    add(key: string, value: T): true | StorageError {
        if (this._map.has(key)) {
            return new StorageError(StorageErrorCodes.KEY_EXISTS);
        }
        this._map.set(key, value);
        this.asyncNotifyObservers([key, value]);
        return true;
    }

    set(key: string, value: T): true | StorageError {
        if (!this._map.has(key)) {
            return new StorageError(StorageErrorCodes.KEY_NOT_EXIST);
        }
        this._map.set(key, value);
        this.asyncNotifyObservers([key, value]);
        return true;
    }

    delete(key: string): true {
        if (this._map.delete(key)) {
            this.asyncNotifyObservers([key, undefined]);
        }
        return true;
    }

    size(): number {
        return this._map.size;
    }
}