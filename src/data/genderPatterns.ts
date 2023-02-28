import { GenderPatterns } from "../types/FrenchWordRecord";

export const endingsPatterns: Record<number, GenderPatterns> = {
  0: { gender: 0, rule: 'phone', exceptions: [], explanation: '' },
  1: { gender: 1, rule: 'ence', exceptions: ['silence'], explanation: '' },
  2: { gender: 1, rule: 'euse', exceptions: [], explanation: '' },
  3: { gender: 1, rule: 'ance', exceptions: [], explanation: '' },
  4: { gender: 1, rule: 'esse', exceptions: [], explanation: '' },
  5: { gender: 1, rule: 'ique', exceptions: ['graphique', 'périphérique', 'plastique', 'moustique'], explanation: '' },
  6: { gender: 1, rule: 'ière', exceptions: ['arrière', 'cimetière', 'derrière'], explanation: '' },
  7: { gender: 1, rule: 'erie', exceptions: [], explanation: '' },
  8: { gender: 0, rule: 'ueil', exceptions: [], explanation: '' },
  9: { gender: 0, rule: 'isme', exceptions: [], explanation: '' },
  10: { gender: 0, rule: 'ment', exceptions: ['jument'], explanation: '' },
  11: { gender: 1, rule: 'rice', exceptions: ['dentifrice'], explanation: '' },
  12: { gender: 0, rule: 'cide', exceptions: [], explanation: '' },
  13: { gender: 0, rule: 'tre', exceptions: ['fenêtre', 'huître', 'lettre', 'montre', 'rencontre', 'vitre'], explanation: '' },
  14: { gender: 0, rule: 'ège', exceptions: [], explanation: '' },
  15: { gender: 0, rule: 'ard', exceptions: [], explanation: '' },
  16: { gender: 0, rule: 'age', exceptions: ['cage', 'image', 'nage', 'page', 'plage', 'rage'], explanation: '' },
  17: { gender: 0, rule: 'ble', exceptions: ['cible', 'étable', 'fable', 'table'], explanation: '' },
  18: { gender: 0, rule: 'cle', exceptions: ['boucle'], explanation: '' },
  19: { gender: 0, rule: 'ing', exceptions: [], explanation: '' },
  20: { gender: 0, rule: 'ste', exceptions: ['liste', 'modiste', 'piste'], explanation: '' },
  21: { gender: 0, rule: 'one', exceptions: [], explanation: '' },
  22: { gender: 0, rule: 'ope', exceptions: [], explanation: '' },
  23: { gender: 0, rule: 'oir', exceptions: [], explanation: '' },
  24: { gender: 0, rule: 'ail', exceptions: [], explanation: '' },
  25: { gender: 0, rule: 'eil', exceptions: [], explanation: '' },
  26: { gender: 0, rule: 'eau', exceptions: ['eau', 'peau'], explanation: '' },
  27: { gender: 0, rule: 'ème', exceptions: [], explanation: '' },
  28: { gender: 1, rule: 'ère', exceptions: ['père', 'frère'], explanation: '' },
  29: { gender: 1, rule: 'son', exceptions: ['blouson'], explanation: '' },
  30: { gender: 1, rule: 'tié', exceptions: [], explanation: '' },
  31: { gender: 1, rule: 'ude', exceptions: ['coude', 'interlude', 'prélude'], explanation: '' },
  32: { gender: 1, rule: 'ule', exceptions: ['préambule', 'scrupule', 'tentacule', 'testicule', 'véhicule', 'ventricule', 'vestibule'], explanation: '' },
  33: { gender: 1, rule: 'ure', exceptions: ['centaure', 'cyanure', 'dinosaure', 'murmure'], explanation: '' },
  34: { gender: 1, rule: 'ace', exceptions: ['ace', 'palace'], explanation: '' },
  35: { gender: 1, rule: 'ade', exceptions: ['grade', 'jade', 'stade'], explanation: '' },
  36: { gender: 1, rule: 'ale', exceptions: ['châle', 'pétale', 'scandale'], explanation: '' },
  37: { gender: 1, rule: 'ine', exceptions: ['capitaine', 'domaine', 'moine', 'magazine', 'patrimoine'], explanation: '' },
  38: { gender: 1, rule: 'ion', exceptions: ['avion', 'bastion', 'billion', 'camion', 'cation', 'dominion', 'espion', 'ion', 'lampion', 'lion', 'million', 'morpion', 'pion', 'scion', 'scorpion', 'trillion'], explanation: '' },
  39: { gender: 1, rule: 'ire', exceptions: ['auditoire', 'commentaire', 'dictionnaire', 'directoire', 'horaire', 'itinéraire', 'ivoire', 'laboratoire', 'navire', 'pourboire', 'purgatoire', 'répertoire', 'salaire', 'sommaire', 'sourire', 'territoire', 'vocabulaire'], explanation: '' },
  40: { gender: 1, rule: 'ise', exceptions: [], explanation: '' },
  41: { gender: 1, rule: 'ite', exceptions: ['anthracite', 'ermite', 'granite', 'graphite', 'mérite', 'opposite', 'plébiscite', 'rite', 'satellite', 'site', 'termite'], explanation: '' },
  42: { gender: 1, rule: 'lle', exceptions: ['braille', 'gorille', 'intervalle', 'mille', 'portefeuille', 'vaudeville', 'vermicelle', 'violoncelle'], explanation: '' },
  43: { gender: 1, rule: 'mme', exceptions: ['dilemme', 'gramme', 'programme'], explanation: '' },
  44: { gender: 1, rule: 'nde', exceptions: ['monde'], explanation: '' },
  45: { gender: 1, rule: 'nne', exceptions: [], explanation: '' },
  46: { gender: 1, rule: 'ole', exceptions: ['contrôle', 'monopole', 'rôle', 'symbole'], explanation: '' },
  47: { gender: 1, rule: 'rre', exceptions: ['beurre', 'parterre', 'tonnerre', 'verre'], explanation: '' },
  48: { gender: 0, rule: 'de', exceptions: ['bride', 'merde', 'méthode', 'pinède', 'ade, -nde, -ude endings'], explanation: '' },
  49: { gender: 1, rule: 'ée', exceptions: ['lycée', 'musée', 'apogée', 'périgée', 'trophée'], explanation: '' },
  50: { gender: 0, rule: 'et ', exceptions: [], explanation: '' },
  51: { gender: 0, rule: 'ot', exceptions: [], explanation: '' },
  52: { gender: 0, rule: 'at', exceptions: [], explanation: '' },
  53: { gender: 0, rule: 'il', exceptions: [], explanation: '' },
  54: { gender: 0, rule: 'me', exceptions: ['alarme', 'âme', 'arme', 'cime', 'coutume', 'crème', 'écume', 'énigme', 'estime', 'ferme', 'firme', 'forme', 'larme', 'plume', 'rame', 'rime'], explanation: '' },
  55: { gender: 0, rule: 'ou', exceptions: [], explanation: '' },
  56: { gender: 1, rule: 'be', exceptions: ['cube', 'globe', 'microbe', 'tube', 'verbe'], explanation: '' },
  57: { gender: 1, rule: 'ce', exceptions: ['artifice', 'armistice', 'appendice', 'bénéfice', 'caprice', 'commerce', 'dentifrice', 'divorce', 'exercice', 'office', 'orifice', 'précipice', 'prince', 'sacrifice', 'service', 'silence', 'solstice', 'supplice', 'vice'], explanation: '' },
  58: { gender: 1, rule: 'cé', exceptions: ['crustacé'], explanation: '' },
  59: { gender: 1, rule: 'ee', exceptions: ['pedigree'], explanation: '' },
  60: { gender: 1, rule: 'aie', exceptions: [], explanation: '' },
  61: { gender: 1, rule: 'fe', exceptions: ['golfe'], explanation: '' },
  62: { gender: 1, rule: 'ie', exceptions: ['incendie', 'foie', 'génie', 'parapluie', 'sosie'], explanation: '' },
  63: { gender: 1, rule: 'se', exceptions: ['carosse', 'colosse', 'gypse', 'inverse', 'malaise', 'pamplemousse', 'parebrise', 'suspense'], explanation: '' },
  64: { gender: 1, rule: 'sé', exceptions: ['exposé', 'opposé'], explanation: '' },
  65: { gender: 1, rule: 'té', exceptions: ['arrêté', 'comité', 'comté', 'côté', 'député', 'été', 'pâté', 'traité'], explanation: '' },
  66: { gender: 1, rule: 'ue', exceptions: ['abaque'], explanation: '' },
  67: { gender: 1, rule: 'e', exceptions: ['peuple'], explanation: '' },
  68: { gender: 0, rule: 'o', exceptions: ['dactylo', 'dynamo', 'libido', 'radio'], explanation: 'Most of these are short versions of longer feminine words.' }, //most of these are apocopes of longer feminine words
  69: { gender: 0, rule: 'i', exceptions: ['foi', 'fourmi', 'loi', 'paroi', 'merci'], explanation: '' },
  70: { gender: 0, rule: 'é', exceptions: ['clé', 'psyché', 'sé, té, and tié endings'], explanation: '' },
  71: { gender: 0, rule: 'u', exceptions: ['tribu', 'vertu'], explanation: '' },
  72: { gender: 0, rule: 'a', exceptions: ['cafétéria', 'pizza'], explanation: '' },
  // Array of consonants
  73: { gender: 0, exceptions: ['mob', 'pub', 'alloc', 'collec', 'doc', 'embroc', 'fac', 'réduc', 'soif', 'clef', 'nef', 'façon', 'fin', 'leçon', 'main', 'maman', 'rançon', 'chair', 'cour', 'cuiller', 'mer', 'tour', 'brebis', 'fois', 'oasis', 'souris', 'vis', 'burlat', 'dent', 'dot', 'forêt', 'mort', 'part', 'plupart', 'ziggourat', 'roseval', 'faim', 'croix', 'noix', 'paix', 'toux', 'voix'], rule: ['b', 'c', 'd', 'f', 'l', 'm', 'n', 'p', 'r', 's', 't', 'x'], explanation: 'Words ending in consonants(in the spelling) are usually masculine.' },
  // Conceptual rules
  74: { gender: 0, explanation: 'Words ending in other consonants (in the spelling).', matches: ['nez', 'étang', 'sang', 'rang'], rule: '', exceptions: [] },
  75: { gender: 0, explanation: 'Certain nouns referring to animals that can refer to only the male of the species. For example: étalon (stallion), cerf (stag), matou (tomcat).', matches: ['étalon', 'stag', 'matou'], rule: '', exceptions: [] },
  76: { gender: 0, explanation: 'Masculine nouns that are \'generic\' terms and can refer to either a male or female of the species. For example, le cheval can refer to either a male or female horse.', matches: ['cheval'], rule: '', exceptions: [] },
  77: { gender: 0, explanation: 'Names of towns. Other place names (departments, rivers, countries) not ending in -e. Sometimes town names, especially if they look or sound feminine (e.g. Marseilles ending in -es), can be treated as feminine. This is quite rare, though.', matches: ['Mexique', 'Combodge', 'Rhône', 'Finistère', 'Zimbabwe', 'Norvège'], rule: '', exceptions: [] },
  78: { gender: 0, explanation: 'Nouns ending in eur, generally derived from a verb, denoting people, professions, machines carrying out an activity or scientific things: aspirateur, facteur, ordinateur', matches: ['aspirateur', 'facteur', 'ordinateur'], rule: '', exceptions: [] },
  79: { gender: 0, explanation: 'Compound nouns of the form verb-noun: porte-monnaie, pare-brise, tire-bouchon.', matches: ['porte-monnaie', 'pare-brise', 'tire-bouchon'], rule: '', exceptions: [] },
  80: { gender: 0, explanation: 'Nouns referring to male people.', matches: ['adulte', 'homme', 'père', 'frère', 'oncle', 'cousin', 'garçon', 'moine'], rule: '', exceptions: [] },
  81: { gender: 0, explanation: 'A handful of nouns are masculine, whatever the gender/sex of the person they refer to, e.g.: amateur, artiste, auteur, nudiste, témoin, vainqueur, voyou plus certain job titles.', matches: ['amateur', 'artiste', 'auteur', 'adolescent', 'nudiste', 'témoin', 'vainqueur', 'voyou'], rule: '', exceptions: [] },
  82: { gender: 1, explanation: 'Place names ending in -e.', matches: ['Franche-Comté', 'Belize', 'Cambodge', 'Mexique', 'Mozambique', 'Zaïre', 'Zimbabwe'], rule: '', exceptions: [] },
  83: { gender: 1, explanation: 'Nouns referring to female people.', matches: ['femme', 'fille', 'tante', 'mère', 'sœur', 'fille'], rule: '', exceptions: [] },
  84: { gender: 1, explanation: 'These are feminine, whatever the gender of the person: personne, victime, recrue (recruit), connaissance (acquaintance).', matches: ['personne', 'victime', 'recrue', 'connaissance'], rule: '', exceptions: [] },
  85: { gender: 1, explanation: 'These are masculine, whatever the gender of the person: témoin, guide', matches: ['témoin', 'guide', 'pygmée'], rule: '', exceptions: [] },
  86: { gender: 1, explanation: 'Certain nouns referring to animals that can refer to only the female of the species. For example: chatte (female cat), chienne (female dog), louve (she-wolf).', matches: ['chatte', 'chienne', 'louve'], rule: '', exceptions: [] },
  87: { gender: 1, explanation: 'Feminine nouns that are \'generic\' terms and can refer to either male or female of the species. For example, la souris can refer to either a male or female mouse.', matches: [], rule: '', exceptions: [] },
  88: { gender: 1, explanation: 'Most other endings consisting of Vowel + Consonant + e: -ine, -ise, -alle, -elle, -esse, -ette etc', matches: ['episode', 'espace', 'intervalle', 'mille', 'magazine', 'réverbère', 'squelette'], rule: '', exceptions: [] },
  89: { gender: 1, explanation: 'Figurative nouns ending in -eur, usually derived from an adjective: rougeur, largeur, pâleur, couleur, horreur, rumeur', matches: [], rule: '', exceptions: [] },
  90: { gender: 1, explanation: 'Words for durations of time are feminine', matches: ['journée', 'année', 'soirée', 'matinée', 'nuitée', 'quarantaine'], rule: '', exceptions: [] },
  91: { gender: 1, explanation: 'Words for points in time are masculine', matches: ['jour', 'an', 'soir', 'matin', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche', 'les printemps', 'l\'été', 'l\'automne', 'l\'hiver', 'février', 'janvier', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'], rule: '', exceptions: ['nuit'] },
  92: { gender: 1, explanation: 'Apocopes are words which drop part of the end. Think of \'cred\' for credit or \'mag\' for magazine in English. Apocopes in French usually take the gender of their source words.', matches: ['santiag', 'métro', 'vélo', 'auto', 'accu', 'actu', 'ado', 'appart', 'ciné', 'fac', 'manif', 'météo', 'moto'], rule: '', exceptions: [] },
  93: { gender: 0, explanation: 'Most untraslated foreign words are masculine', matches: ['look', 'jury', 'stock', 'gang', 'crash', 'gaz', 'match', 'whisky', 'URL', 'trend', 'week-end'], rule: '', exceptions: [] },
  94: { gender: 0, explanation: 'The names of wines and most cheeses are usually masculine', matches: ['Bordeaux', 'Bourgorgne', 'Chablis', 'Pinot', 'Brie', 'Cantal', 'Camembert'], exceptions: ['Tomme', 'Brique'], rule: '' },
  95: { gender: 0, explanation: 'Colors are masculine', matches: [], exceptions: [], rule: '' },
  96: { gender: 0, explanation: 'Numbers are masculine if they are exact, but numbers that are approximate are feminine', matches: [], exceptions: [], rule: '' },
  97: { gender: 0, explanation: 'Numbers are masculine if they are exact', matches: ['cent', 'douze'], exceptions: [], rule: '' },
  98: { gender: 0, explanation: 'Numbers that are approximate are feminine, but numbers are masculine if they are exact', matches: ['cinquaiantaine', 'douzaine'], exceptions: [], rule: '' },
  99: { gender: 0, explanation: 'Metals are masculine', matches: ['or', 'argent', 'plomb'], exceptions: [], rule: '' },
  100: { gender: 0, explanation: 'Lanugages are masculine', matches: ['chinois', 'anglais', 'français', 'espagnol'], exceptions: [], rule: '' },
  101: { gender: 0, explanation: 'Trees are masculine, and so are most shrubs but vines are feminine.', matches: ['arbre', 'pommier', 'pin', 'sapin', 'saule', 'platane'], exceptions: ['vigne'], rule: '' },
  102: { gender: 1, explanation: 'Most brand names of cars and watches', matches: ['Rolex', 'Swatch', 'Peugeot', 'Citroën', 'Mercedes', 'BMW'], exceptions: [], rule: '' },
  103: { gender: 0, explanation: 'Units of measure', matches: ['kilo', 'mètre', 'joule', 'hectare', 'litre', 'quart'], exceptions: ['moitié'], rule: '' },
  104: { gender: 1, explanation: 'The proper names of most rivers', matches: [], exceptions: [], rule: '' },
  105: { gender: 1, explanation: 'The proper names of domains of learning', matches: ['science', 'géographie', 'astronomie', 'histoire', 'chimie'], exceptions: ['droit'], rule: '' },
  // Regex rules
  106: { gender: 0, rule: /([^s|c][a,e,i,o]){1}n[d|t]+\W/, exceptions: [], explanation: 'Words that end in a pattern of vowel + n + d or t are almost all masculine, unless the ending follows an s or c.' },
  107: { gender: 0, rule: /[a,i,o]{1}n(?!è|é|à|ì|ò|ù|â|ê|ô|î|û|ë|ï|ü)\b/, exceptions: [], explanation: 'Words that end in a pattern of a, i or o + n are almost all masculine.' },
};
