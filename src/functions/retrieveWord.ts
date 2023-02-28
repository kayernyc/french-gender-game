import data from '../data/frenchWordsSource.json';
import { endingsPatterns } from '../data/genderPatterns';

import { FrenchWordRecord, FrenchWordWithRule, GenderPatterns } from '../types/FrenchWordRecord';

const frenchWords = data as FrenchWordRecord[];

export const retrieveWord = (wordRecord: FrenchWordRecord[] = frenchWords, patterns: Record<number, GenderPatterns> = endingsPatterns): FrenchWordRecord | FrenchWordWithRule => {
  if (wordRecord.length > 0) {
    // pick a random record
    const word = wordRecord[Math.floor(Math.random() * wordRecord.length)];
    if (word.genderRuleKey && patterns[word.genderRuleKey]) {
      const rule = patterns[word.genderRuleKey];
      return { ...rule, ...word };
    }

    return word;
  }
  throw Error('No words available.')
};
