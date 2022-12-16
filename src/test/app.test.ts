import {BasicCalculator} from "../BasicCalculator";

describe('test calculator basic math',() =>{
    test('test calculator basic math',()=>{
        let a = 1;
        let b = 2;
        let expected = 3;
        expect(BasicCalculator.add(a,b)).toEqual(expected);
    })
})