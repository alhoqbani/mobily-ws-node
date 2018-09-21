import http, { RequestPromise } from 'request-promise';

type numbersOptions = Array<string | number> | string | number;

export class MobilyWs {

    private readonly _apiKey: string;
    private readonly _sender: string;

    constructor(apiKey: string, sender: string) {
        this._apiKey = apiKey;
        this._sender = sender;
    }

    sendSMS(msg: string, numbers: numbersOptions, options?: object): RequestPromise {

        const body = Object.assign({
            apiKey: this._apiKey,
            sender: this._sender,
            msg,
            numbers,
            lang: '3',
            applicationType: '68'
        }, options);

        return http.post('http://www.mobily.ws/api/msgSend.php', {body, json: true})
    }
}