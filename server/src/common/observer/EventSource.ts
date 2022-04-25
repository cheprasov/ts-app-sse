import { EventSourceInf } from './EventSourceInf';
import type { ObserverCallback } from './ObserverCallback';

export class EventSource<T> implements EventSourceInf<T> {
    protected _observerCallbackSet: Set<ObserverCallback<T>> = new Set();

    protected async asyncNotifyObservers(event: T) {
        this._observerCallbackSet.forEach(async (callback) => {
            try {
                callback(event);
            } catch (error) {
                // todo
                this.removeObserver(callback);
            }
        });
    }

    addObserver(callback: ObserverCallback<T>): void {
        this._observerCallbackSet.add(callback);
    }

    removeObserver(callback: ObserverCallback<T>): void {
        this._observerCallbackSet.delete(callback);
    }
}