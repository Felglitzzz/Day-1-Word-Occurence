import chai, {expect} from "chai";
import wordoccurence from "../wordoccurence.js";

describe('App', function(){
	it('app should return an Object', function(){

		let value= {the: 1, boy: 2, he: 1, hd: 1};
		expect(wordoccurence('the boy boy he hd')).to.deep.equal(value);

	});
	it('testing if argument is a number', function(){

		let value='Invalid input';
		let num = 3;

		expect(wordoccurence(num)).to.deep.equal(value);
	});
});
