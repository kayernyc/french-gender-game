import { describe, expect, it } from '@jest/globals';
import { FrenchWordRecord, retrieveWord } from "./retrieveWord";

const emptyWordRecord: FrenchWordRecord[] = [];
const onewordRecord: FrenchWordRecord[] = [
  {
    english: 'string',
    french: 'fil',
    gender: 0,
    exception: false
  }
]

describe('RetrieveWord', () => {
  it('throws an error if there is no word array', () => {

    expect(() => {
      retrieveWord(emptyWordRecord)
    }).toThrow();
  });

  it('returns the only word configuration available', () => {
    const result = retrieveWord(onewordRecord);
    expect(result).toEqual({
      english: 'string',
      french: 'fil',
      gender: 0,
      exception: false
    });
  });
});
