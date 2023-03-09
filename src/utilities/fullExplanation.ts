import { endingsPatterns } from '../data/genderPatterns.js';

export const fullExplanation = (genderRuleKey: number, french: string, exception: boolean): string => {
  try {

    const { gender, rule, explanation } = endingsPatterns[genderRuleKey];

    if (rule && !explanation) {
      return `Words ending in "${rule}" are usually ${gender === 0 ? 'masculine' : 'feminine'}.
      ${exception ? `The word «${french}» is an exception.` : ''}
      `
    }

    if (explanation) {
      return `${explanation}
      ${exception ? `The word «${french}» is an exception.` : ''}`
    }
  } catch (error) {
    if (error instanceof Error) {
      // eslint-disable-next-line no-console
      console.warn(error.message)
      console.log(genderRuleKey)
    }
  }

  console.warn(`${genderRuleKey} has neither rule nor explanation`);

  return '';
};
