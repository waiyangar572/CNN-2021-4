const Titles: string[] = [
	"Photographic Proof",
	"Rare Victory",
	"Playing for More than Fun",
	"Help from Right Inside",
	"Beauty in Difference",
	"A Pioneer’s Great Value",
];
const Sentences: string[] = [
	"Researchers with the National Science Foundation say a supermassive black hole is more than a Muse song. They say they captured a picture of one and that this is the first direct visual evidence that black holes exist. To capture what they say is an image of one, scientists synced up a global network of telescopes in 2017, and they all zoomed in on a spot in the universe that's estimated to be 55 million light years away from Earth.",
	"Some scientists say that a second person in history has been cured of HIV. A patient in London has been in remission for 18 months after treatment involving stem-cell transplants. The cells were taken from donors who have rare genetic mutations that make them resistant to HIV. This case comes more than 10 years after a Berlin patient was similarly cured by stem-cell therapy.",
	"The Fortnite World Cup has wrapped up its first-ever massive sporting event, in New York. And some of the youngest gamers won big. A 16-year-old American who plays under the name Bugha won the $3 million top prize in the solos division. That's the largest payout for a single player in e-sports. And get this: everyone who took part in Sunday's competition, even if they scored no points at all, takes home at least $50,000 just for playing.",
	"SpaceX founder Elon Musk's latest vision for the future is a way to merge your brain with artificial intelligence. Musk is cofounder of Neuralink, a start-up which aims to implant a device in the brain that would communicate with an iPhone app and computers as well. Musk says the device could be used to improve memory, repair motor function or just help people with cognitive defects. He says the trials could begin by the end of next year. Critics, though, are warning about the risks of business enterprises gaining access to brain data.",
	"A Muslim supermodel is making history with her appearance in the Sports Illustrated swimsuit edition. Halima Aden is the first model to wear a hijab and burkini in the magazine. Three years ago, she was the first contestant in the Miss Minnesota USA pageant to wear a hijab and burkini. At that time, she told CNN that many Muslim women don't feel they fit society's standard of beauty. She said her message is it's OK to be different and that being different is beautiful too.",
	"A pioneer in both modern computing and the LGBT community is being honored in England. Alan Turing will be the face of Britain's new £50 note. Turing was the codebreaker and visionary mathematician who cracked Germany's coded messages during World War II. He also played a pivotal role in developing computers. He was also convicted under Victorian homophobic laws, which eventually led him to commit suicide. The governor of the Bank of England called Turing \"a giant on whose shoulders so many now stand.\" The new notes will appear by the end of 2021.",
];

function showQuiz() {
	const rnd = Math.floor(Math.random()*Titles.length);
	
	console.log('aaa');
	
	let {title, sentence, answers} = generateQuiz(rnd);
	console.log(rnd, title, sentence, answers);
	
	$("#title").text(title);
	$('#sentence').text(sentence);
	$('#answers').text(answers.join(","));
}

function generateQuiz(ind: number): {title: string, sentence: string, answers: string[]} {
	const originalTitle = Titles[ind];
	const originalSentence = Sentences[ind];

	let sentence = "";
	let answers = [] as string[];

	const words = originalSentence.split(" ");
	const difficulty = $('#difficulty').val() as number;
	const quizNum = Math.floor(words.length/difficulty);

	let answerIndexes = [] as number[];

	while (answerIndexes.length < quizNum) {
		let rnd = Math.floor(Math.random()*words.length);
		if (!answerIndexes.includes(rnd)) {
			answerIndexes.push(rnd);
		}
	}
	let wordsForQuiz = [].concat(answerIndexes);
	console.log(wordsForQuiz);
	
	for (const answerIndex of answerIndexes) {
		const replaceStr = (words[answerIndex].match(/.*\./))?"( ).":"( )"
		wordsForQuiz.splice(answerIndex,answerIndex,replaceStr);
	}

	sentence = wordsForQuiz.join(" ");
	console.log({title: originalTitle, sentence: sentence, answers: answers});
	
	return {title: originalTitle, sentence: sentence, answers: answers};
}

let isVisibleAnswers = false;
function onTurningAnswerButton() {
	if (isVisibleAnswers) {
		$('#turningAnswerButton').text('hide');
		$('answers').css('display','none');
	} else {
		$('#turningAnswerButton').text('answer');
		$('answers').css('display','block');
	}
}

$(document).on('click','#genQuizButton',()=>showQuiz());
$(document).on('click','#turningAnswerButton',()=>onTurningAnswerButton());