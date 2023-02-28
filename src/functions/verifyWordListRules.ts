import data from '../data/frenchWordsSource.json';
import { endingsPatterns } from '../data/genderPatterns';
import { FrenchWordRecord, GenderPatterns } from '../types/FrenchWordRecord';

const frenchWords = data as FrenchWordRecord[];

export const verifyWordListRules = (wordRecord: FrenchWordRecord[] = frenchWords, patterns: Record<number, GenderPatterns> = endingsPatterns) => {
  let numOfExceptions = 0;
  wordRecord.forEach(word => {
    const { exception, genderRuleKey, french } = word;

    if (genderRuleKey && genderRuleKey < 108) {
      const genderRule = patterns[genderRuleKey];
      const { rule } = genderRule;

      const genderMismatchPredicate = (word.gender !== genderRule.gender && !exception);
      const genderFalseMatchPredicate = (word.gender === genderRule.gender && exception);

      if (typeof rule === 'string' && rule.length > 0) {
        const ending = french.slice(-rule.length);
        if ((ending === rule && word.gender !== genderRule.gender && !exception) || (ending !== rule)) {
          numOfExceptions++;
          console.log({ word }, { genderRule })
        }
      }
      if (Array.isArray(rule)) {
        const ending = french.slice(-1);
        if (rule.includes(ending) && (genderMismatchPredicate || genderFalseMatchPredicate)) {
          numOfExceptions++;
          console.log({ word }, { genderRule })
        }
      }
    }

  });
  console.log(numOfExceptions);
};
