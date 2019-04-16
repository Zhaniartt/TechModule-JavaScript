function splitPascalCase(word) {
	let wordRe = /[A-Z][a-z]*/g;
	console.log(word.match(wordRe).join(", "));
}
splitPascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan')