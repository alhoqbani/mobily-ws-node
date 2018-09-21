import { assert, expect } from "chai";
import { MobilyWs } from "../src/MobilyWs";
import sinon from "sinon";
import http from 'request-promise';
import Bluebird = require("bluebird");

describe('Sending SMS', () => {

    it('should post a request with given message, numbers and correct options.', (done) => {

        let stub = sinon.stub();
        stub.returns(Bluebird.resolve());
        sinon.replace(http, 'post', stub);

        let expectedBody = {
            apiKey: 'API_KEY_123',
            sender: 'Sender Name',
            applicationType: '68',
            lang: '3',
            msg: 'Some message',
            numbers: ['966500000000']
        };

        let client = new MobilyWs('API_KEY_123', 'Sender Name');

        client.sendSMS('Some message', ['966500000000']).then(() => {
            assert(stub.calledOnce, 'Post request was not called.');
            expect(stub.args[0][1].body).is.eql(expectedBody);
            done();
        });
    });
});