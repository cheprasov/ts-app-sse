
export class ValidationError extends Error {

    readonly key: string;

    constructor(key: string, message: string = '') {
        super(message);

        this.key = key;
    }

}