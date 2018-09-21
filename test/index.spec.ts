import 'mocha';

import {expect} from 'chai';
import {MobilyWs} from "../src/MobilyWs";
import mobilyWs from "../src/index";

describe('Package entry point', () => {

    it('mobilyWs returns instance of MobilyWs', () => {
        const client = mobilyWs('username', 123123);

        expect(client).is.instanceOf(MobilyWs)

    })
});