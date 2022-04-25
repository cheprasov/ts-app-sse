import type { ObserverCallback } from './ObserverCallback';

export interface EventSourceInf<T> {

    addObserver(callback: ObserverCallback<T>): void;

    removeObserver(callback: ObserverCallback<T>): void;

}