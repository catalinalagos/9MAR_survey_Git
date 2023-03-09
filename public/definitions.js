// ---------------------------- KEYWORDS DEFINITION ----------------------
//Keywords that set colors: emotions typology (TU Delft)
//lists [color, keywords]
//hardcoded stemma
var EmotionList1 = [[191, 43, 33], 'anger', 'angry', 'indign', 'resent', 'frustr', "freak out", 'irritab',
  'bad mood'
];
var EmotionList2 = [
  [211, 113, 110], 'contempt', 'hate', 'disgust',  'dissatisf'
];
var EmotionList3 = [
  [230, 172, 163], 'bore', 'reluct', 'mental', 'annoy'
];
var EmotionList4 = [
  [139, 97, 147], 'sad', 'disappoint', 'pity', 'belittl'
];
var EmotionList5 = [
  [135, 68, 132], 'lonel', 'reject', 'humili', 'longing', 'envy', 'jealous', 'guilt', 'regret'
];
var EmotionList6 = [
  [89, 56, 130], 'shame', 'embarrass', 'disgust', 'self-esteem', 'self-confidence', 'lack of', 'less capable'
];
var EmotionList7 = [
  [35, 59, 141], 'fear', 'startle', 'worry','worries', 'hurt','afraid'
];
var EmotionList8 = [
  [59, 114, 165], 'anxi', 'distrust', 'doubt', 'nervous', 'insecur', 'question', 'hypersensiti'
];
var EmotionList9 = [
  [55, 137, 189], 'distress', 'stress', 'despera', 'pressur', 'difficult', 'less motiva'
];
var EmotionList10 = [
  [108, 170, 222], 'confus', 'shock', 'exaggera', 'misunderstan'
];
var EmotionList11 = [
  [156, 224, 213], 'amuse', 'schadenfreude', 'pleasure', 'seren', 'organiz'
];
var EmotionList12 = [
  [107, 212, 184], 'relief', 'satisfaction', 'euphoria', 'productive', 'reliev'
];
var EmotionList13 = [
  [91, 184, 156], 'happy', 'lust', 'affection', 'tenderness'
];
var EmotionList14 = [
  [74, 150, 119], 'elevation', 'gratitude', 'grateful', 'worship', 'admir', 'moved', 'enjoy'
];
var EmotionList15 = [
  [251, 223, 77], 'pride', 'proud', 'motivat'
];
var EmotionList16 = [
  [244, 172, 60], 'determin', 'fascina', 'positive surprise', 'inspir', 'awe','surpris'
];
var EmotionList17 = [
  [238, 120, 51], 'excit', 'hope'
];


//ALL EMOTIONS IN ONE ARRAY 
var allEmotionsLists = [EmotionList1, EmotionList2, EmotionList3, EmotionList4, EmotionList5, EmotionList6, EmotionList7, EmotionList8, EmotionList9, EmotionList10, EmotionList11, EmotionList12, EmotionList13, EmotionList14, EmotionList15, EmotionList16, EmotionList17];

//Other keywords
var selfActionsPosList = [0, 'get involved', 'got involved', 'ask for help', 'get help', 'got help', 'asked for help', 'resilien'];
var selfActionsNegList = [1, 'drug','drink', 'pills', 'medicat', 'alcohol', 'sleep'];
var selfCharacteristicsList = [2, 'lgb', 'lesbian', 'gay', 'homosexual', 'bisexual', 'transexual', 'transgender', 'non binar', 'queer', 'ethnic', 'race', 'disabl', 'disabilit', 'neurodiver', 'healt issue', 'health problem'];
var envEntitiesList = [3, 'support network', 'network', 'friend', 'family', 'peer', 'colleague', 'profess', 'staff', 'university', 'faculty', 'iade', 'secretary', 'director', 'coordinator', 'sef', 'police', 'government', 'school', 'institution'];
var envActionsPosList = [4, 'support', 'inclusiveness', 'inclus', 'inclusivity', 'includ', 'sociali', 'engag', 'involv'];
var envActionsNegList = [5, 'harass', 'bulli', 'bully', 'sexis', 'racis', 'belittl', 'discrimin', 'abus', 'humiliat'];
var envCharacteristicsList = [6,'schedul','long hours','load','work load', 'stress levels', 'bachelor', 'master', 'phd'];
var allSelfLists = [selfActionsPosList, selfActionsNegList, selfCharacteristicsList];
var allEnvLists = [envEntitiesList, envActionsPosList, envActionsNegList, envCharacteristicsList];

//allKeywordsArray[allEmotionsLists(array of arrays), allSelfLists(array of arrays), allEnvLists(array of arrays)];
var allKeywordsArray = [allEmotionsLists, allSelfLists, allEnvLists];