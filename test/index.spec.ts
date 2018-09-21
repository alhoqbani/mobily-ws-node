import 'mocha';
import { expect } from 'chai';
import mobilyWs from "../src/index";
import { MobilyWs } from "../src/MobilyWs";

describe('mobilyWs init function.', () => {

    it('requires an API key', () => {
        // @ts-ignore
        expect(() => mobilyWs(null, 'Sender Name')).to.throw();
    });

    it('requires a sender name', () => {
        // @ts-ignore
        expect(() => mobilyWs('API_KEY_1234')).to.throw();
    });

    it('returns an instance of MobilyWs class.', () => {
        const client = mobilyWs('API_KEY_1234', 'Sender Name');

        expect(client).is.instanceOf(MobilyWs);
    });

});