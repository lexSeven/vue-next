import { isSSRSafeAttrName } from '../src';

test('ssr: domAttrConfig',()=>{
    expect(isSSRSafeAttrName(` `))
})
