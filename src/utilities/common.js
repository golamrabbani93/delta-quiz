const getData = async () => {
	//*get products from api
	const quixData = await fetch('https://openapi.programming-hero.com/api/quiz');
	const quiz = await quixData.json();
	return quiz;
};

export {getData};
