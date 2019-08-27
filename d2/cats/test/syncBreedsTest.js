const assert = require('chai').assert;
const breedDetails = require('../syncBreeds');
const expectedDesc = "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder.";

const bombay = breedDetails('Bombay');

describe('#breedDetails', () => {
  it('returns breed details for the Bombay breed', () => {
    // We expect it to be a function, but will it be?
    assert.equal(expectedDesc, bombay);
    console.log(breedDetails);
  });
});