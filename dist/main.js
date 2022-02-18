/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (() => {

eval("var Titles = [\r\n    \"Photographic Proof\",\r\n    \"Rare Victory\",\r\n    \"Playing for More than Fun\",\r\n    \"Help from Right Inside\",\r\n    \"Beauty in Difference\",\r\n    \"A Pioneer’s Great Value\",\r\n];\r\nvar Sentences = [\r\n    \"Researchers with the National Science Foundation say a supermassive black hole is more than a Muse song. They say they captured a picture of one and that this is the first direct visual evidence that black holes exist. To capture what they say is an image of one, scientists synced up a global network of telescopes in 2017, and they all zoomed in on a spot in the universe that's estimated to be 55 million light years away from Earth.\",\r\n    \"Some scientists say that a second person in history has been cured of HIV. A patient in London has been in remission for 18 months after treatment involving stem-cell transplants. The cells were taken from donors who have rare genetic mutations that make them resistant to HIV. This case comes more than 10 years after a Berlin patient was similarly cured by stem-cell therapy.\",\r\n    \"The Fortnite World Cup has wrapped up its first-ever massive sporting event, in New York. And some of the youngest gamers won big. A 16-year-old American who plays under the name Bugha won the $3 million top prize in the solos division. That's the largest payout for a single player in e-sports. And get this: everyone who took part in Sunday's competition, even if they scored no points at all, takes home at least $50,000 just for playing.\",\r\n    \"SpaceX founder Elon Musk's latest vision for the future is a way to merge your brain with artificial intelligence. Musk is cofounder of Neuralink, a start-up which aims to implant a device in the brain that would communicate with an iPhone app and computers as well. Musk says the device could be used to improve memory, repair motor function or just help people with cognitive defects. He says the trials could begin by the end of next year. Critics, though, are warning about the risks of business enterprises gaining access to brain data.\",\r\n    \"A Muslim supermodel is making history with her appearance in the Sports Illustrated swimsuit edition. Halima Aden is the first model to wear a hijab and burkini in the magazine. Three years ago, she was the first contestant in the Miss Minnesota USA pageant to wear a hijab and burkini. At that time, she told CNN that many Muslim women don't feel they fit society's standard of beauty. She said her message is it's OK to be different and that being different is beautiful too.\",\r\n    \"A pioneer in both modern computing and the LGBT community is being honored in England. Alan Turing will be the face of Britain's new £50 note. Turing was the codebreaker and visionary mathematician who cracked Germany's coded messages during World War II. He also played a pivotal role in developing computers. He was also convicted under Victorian homophobic laws, which eventually led him to commit suicide. The governor of the Bank of England called Turing \\\"a giant on whose shoulders so many now stand.\\\" The new notes will appear by the end of 2021.\",\r\n];\r\nfunction showQuiz() {\r\n    var rnd = Math.floor(Math.random() * Titles.length);\r\n    var _a = generateQuiz(rnd), title = _a.title, sentence = _a.sentence, answers = _a.answers;\r\n    $(\"#title\").text(title);\r\n    $('#sentence').text(sentence);\r\n    $('#answers').text(answers.join(\",\"));\r\n}\r\nfunction generateQuiz(ind) {\r\n    var originalTitle = Titles[ind];\r\n    var originalSentence = Sentences[ind];\r\n    var sentence = \"\";\r\n    var answers = [];\r\n    var words = originalSentence.split(\" \");\r\n    var difficulty = $('#difficulty').val();\r\n    var quizNum = Math.floor(words.length / difficulty);\r\n    var answerIndexes = [];\r\n    while (answerIndexes.length < quizNum) {\r\n        var rnd = Math.floor(Math.random() * words.length);\r\n        if (!answerIndexes.includes(rnd)) {\r\n            answerIndexes.push(rnd);\r\n        }\r\n    }\r\n    var wordsForQuiz = [].concat(answerIndexes);\r\n    for (var _i = 0, answerIndexes_1 = answerIndexes; _i < answerIndexes_1.length; _i++) {\r\n        var answerIndex = answerIndexes_1[_i];\r\n        var replaceStr = (words[answerIndex].match(/.*\\./)) ? \"( ).\" : \"( )\";\r\n        wordsForQuiz.splice(answerIndex, answerIndex, replaceStr);\r\n    }\r\n    sentence = wordsForQuiz.join(\" \");\r\n    return { title: originalTitle, sentence: sentence, answers: answers };\r\n}\r\nvar isVisibleAnswers = false;\r\nfunction onTurningAnswerButton() {\r\n    if (isVisibleAnswers) {\r\n        $('#turningAnswerButton').text('hide');\r\n        $('answers').css('display', 'none');\r\n    }\r\n    else {\r\n        $('#turningAnswerButton').text('answer');\r\n        $('answers').css('display', 'block');\r\n    }\r\n}\r\n$(document).on('click', '#genQuizButton', showQuiz);\r\n$(document).on('click', '#turningAnswerButton', onTurningAnswerButton);\r\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/main.ts"]();
/******/ 	
/******/ })()
;