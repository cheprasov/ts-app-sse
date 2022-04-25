import { isString } from '../common/variables/variablesHelper';
import { ValidationError } from './ValidationError';
import type { Validator } from './ValidatorInf';

const valueRegExp = /^[-a-z0-9_ ]{1, 100}$/i;
export const isValueValid: Validator = (key: string, value: any): true | Error => {
    if (!value) {
        return new ValidationError(key, `Value for '${key}' is not provide`);
    }
    if (!isString(value) || valueRegExp.test(value)) {
        return new ValidationError(key, `Incorrect value for '${key}'`);
    }

    return true;
}