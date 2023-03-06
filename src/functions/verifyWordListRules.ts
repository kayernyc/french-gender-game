import { frenchWords } from '../data/frenchWords.js';
import { endingsPatterns } from '../data/genderPatterns.js';
import { FrenchWordRecord, GenderPatterns } from '../types/FrenchWordRecord.js';

export const verifyWordListRules = (wordRecord: FrenchWordRecord[] = frenchWords, patterns: Record<number, GenderPatterns> = endingsPatterns) => {

  let numOfExceptions = 0;
  wordRecord.forEach(word => {
    const { exception, genderRuleKey, french } = word;

    if (genderRuleKey && genderRuleKey < 80) {
      const genderRule = patterns[genderRuleKey];
      const { rule } = genderRule;

      const genderMismatchPredicate = (word.gender !== genderRule.gender && !exception);
      const genderFalseMatchPredicate = (word.gender === genderRule.gender && exception);

      if (typeof rule === 'string' && rule.length > 0) {
        const ending = french.slice(-rule.length);
        if ((ending === rule && (genderMismatchPredicate || genderFalseMatchPredicate)) || (ending !== rule)) {
          console.log(french)
          numOfExceptions++;
        }
      }
      if (Array.isArray(rule)) {
        const ending = french.slice(-1);
        if (rule.includes(ending) && (genderMismatchPredicate || genderFalseMatchPredicate)) {
          numOfExceptions++;
        }
      }
    }

  });
  console.log(numOfExceptions, '<<<');
};
