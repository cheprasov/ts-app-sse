
export interface MutexInf {

    runExclusive: <T>(callback: () => T) => T;

}