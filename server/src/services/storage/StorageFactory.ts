import { Nullable } from '../../common/types/Nullable';
import MemoryStorage from './memory/MemoryStorage';
import { StorageInf } from './StorageInf';

export class StorageFactory {

    protected static _instance: Nullable<StorageInf<any>> = null;

    static getStorage(): StorageInf<string> {
        if (!this._instance) {
            this._instance = new MemoryStorage<string>()
        }

        return this._instance;
    }

}