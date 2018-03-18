import { safeCb } from './util';


describe('Util', () => {
    it('Has a safeCb function', () => {
        let notAFunction = undefined;

        safeCb(notAFunction).should.not.throw(Error);
    });
});
