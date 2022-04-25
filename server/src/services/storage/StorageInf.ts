import { EventSourceInf } from '../../common/observer/EventSourceInf';
import { Maybe } from '../../common/types/Maybe';
import { StorageError } from './StorageError';

export type EventParams<T> = [string, T | undefined];

export type OnChangeCallback = <T, E = EventParams<T>>(event: E) => void;

export interface StorageInf<T> extends EventSourceInf<EventParams<T>> {
    // Get the value of key. If the key does not exist the special value `undefined` is returned.
    get(key: string): Maybe<T> | StorageError;

    // Set key to hold a value if key does not exist.
    add(key: string, value: T): true | StorageError;

    // Overwrite existed key by a new value.
    set(key: string, value: T): true | StorageError;

    // Removes the specified key. A key is ignored if it does not exist.
    delete(key: string): true | StorageError;

    // Returns the amount of keys in the storage
    size(): number | StorageError;
}