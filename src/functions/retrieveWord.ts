import frenchWords from '../data/frenchWordsSource.json';
import { endingsPatterns } from '../data/genderPatterns';

export interface FrenchWordRecord {
  english: string;
  french: string;
  gender: number;
  genderRuleKey?: number;
  exception: boolean;
}

export const retrieveWord = (wordRecord: FrenchWordRecord[] = frenchWords,): FrenchWordRecord => {
  if (wordRecord.length > 0) {
    // pick a random record
    return wordRecord[Math.floor(Math.random() * retrieveWord.length)]
  }
  throw Error('No words available.')
};
