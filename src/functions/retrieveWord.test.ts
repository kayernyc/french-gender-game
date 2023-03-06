import { describe, expect, it } from '@jest/globals';
import { FrenchWordRecord } from '../types/FrenchWordRecord.js';
import { retrieveWord } from "./retrieveWord.js";

const emptyWordRecord: FrenchWordRecord[] = [];
const onewordRecord: FrenchWordRecord[] = [
  {
    english: 'string',
    french: 'fil',
    gender: 0,
    exception: false
  }
]

describe('retrieveWord', () => {
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

describe('retrieveWord', () => {
  beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(.01);
  });

  afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
  })

  it('returns the complete word object', () => {
    const result = retrieveWord();
    expect(result).toEqual({
      english: 'family',
      explanation: '',
      exceptions: [
        'braille',
        'gorille',
        'intervalle',
        'mille',
        'portefeuille',
        'vaudeville',
        'vermicelle',
        'violoncelle',
      ],
      french: 'famille',
      gender: 1,
      genderRuleKey: 42,
      exception: false,
      rule: 'lle'
    });
  });
});

