import { expect } from 'chai';
import { sum, sub, div, mut } from '../src/Calculator';

describe('Calculator Prototype', () => {

  it('Should return sum equal 10', () => {
    expect(sum(5, 5)).to.be.equal(10);
  });

  it('Should return sub equal 0', () => {
    expect(sub(5, 5)).to.be.equal(0);
  });

  it('Should return div equal 1', () => {
    expect(div(5, 5)).to.be.equal(1);
  });

  it('Should return mut equal 25', () => {
    expect(mut(5, 5)).to.be.equal(25);
  });

});