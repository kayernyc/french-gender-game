export interface FrenchWordRecord {
  english: string;
  french: string;
  gender: GenderBinary;
  genderRuleKey?: number;
  exception: boolean;
}

export type GenderBinary = 0 | 1;

export interface GenderPatterns {
  gender: GenderBinary;
  rule: string | RegExp | string[];
  exceptions: string[];
  explanation: string;
  matches?: string[]
}

export interface FrenchWordWithRule extends FrenchWordRecord, GenderPatterns { }
