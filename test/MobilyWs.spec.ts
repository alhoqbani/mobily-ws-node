import 'mocha';

import {expect} from 'chai';
import {MobilyWs} from "../src/MobilyWs";

describe('MobilyWs', () => {

    it('Accept username and password', () => {
        const mobilyWs = new MobilyWs('username', 123123);

        expect(mobilyWs).is.instanceOf(MobilyWs)

    })
});