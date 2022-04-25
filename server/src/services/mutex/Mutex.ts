import { MutexInf } from './MutexInf';

export class Mutex implements MutexInf {

    construcor(name: string) {
        // todo: should be implemented
    }

    runExclusive<T>(callback: () => T): T {
        // todo: should be implemented
        return callback();
    }

}