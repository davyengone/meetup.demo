import sum from '../sum.js';

import chai from 'chai';
console.log(chai.expect)
let expect = chai.expect;


describe('Sum', () => {
	it('add', () => {
	 var result = sum(2, 3);
	 expect(result).to.equal(5);
	});
})
