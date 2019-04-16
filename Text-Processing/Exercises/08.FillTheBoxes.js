function solve(input){
        let textWords = input[0]
        let wordsToReplace = input[1]
        let regex = /_+/g
    let match = regex.exec(textWords);
    while(match){
        textWords = textWords.replace(match[0], wordsToReplace.find(w => w.length === match[0].length));
        match = regex.exec(textWords);
    }
    console.log(textWords)
}
solve(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
 ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])