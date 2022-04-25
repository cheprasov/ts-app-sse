import { Handler, NextFunction, Request, Response } from 'express';
import { HttpCodes } from '../http/HttpCodes';
import { HttpResponse } from '../http/HttpResponse';
import { ValidationError } from '../validators/ValidationError';

type CallbackHandler = (
    request: Request,
    response: Response,
    next: NextFunction,
) => Promise<HttpResponse> | HttpResponse | void;

const responseHelper = (callback: CallbackHandler): Handler => {
    return async (request: Request, response: Response, next: NextFunction) => {
        try {
            let resp = callback(request, response, next);
            if (resp instanceof Promise) {
                resp = await resp;
                if (resp instanceof Error) {
                    throw resp;
                }
            }
            if (resp) {
                response.status(resp.getCode()).header(resp.getHeaders()).send(resp.getMessage()).end();
                return;
            }
        } catch (error: any) {
            if (error instanceof ValidationError) {
                response.status(HttpCodes.BAD_REQUEST).send(error.message).end();
                return;
            }
            if (error instanceof HttpResponse) {
                response.status(error.getCode()).header(error.getHeaders()).send(error.getMessage()).end();
                return;
            }
            response.status(HttpCodes.INTERNAL_SERVER_ERROR);
            if (error instanceof Error && error.message) {
                response.send(error.message);
            } else {
                response.send('Server error. Please try again later.');
            }
            response.end();
        }
    }
}

export default responseHelper;