import { expect } from 'chai';
import FizzBuzz from '../src/Fizzbuzz';

describe('FizzBuzz Prototype', () => {

  it('Should...', () => {
    expect(FizzBuzz(3)).to.be.equal('Fizz');
  });

  it('Should...', () => {
    expect(FizzBuzz(5)).to.be.equal('Buzz');
  });

  it('Should...', () => {
    expect(FizzBuzz(15)).to.be.equal('FizzBuzz');
  });

  it('Should...', () => {
    expect(FizzBuzz(0)).to.be.equal(0);
  });

  it('Should...', () => {
    expect(FizzBuzz(7)).to.be.equal(7);
  });

});
