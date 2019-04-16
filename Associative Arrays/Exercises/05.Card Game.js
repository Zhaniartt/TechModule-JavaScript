function solve(arr) {
    let powerMap = []
    powerMap["S"] = 4;
    powerMap["H"] = 3;
    powerMap["D"] = 2;
    powerMap["C"] = 1;
 
    let cardsOfPlayers = new Map()
    for (let ar of arr) {
        let name = ar.split(": ")[0]
        let currentCards = ar.split(": ")[1]
        currentCards = currentCards.split(", ")
 
        if (!cardsOfPlayers.has(name)) {        //ако нямаме името на човека в мапа
            cardsOfPlayers.set(name, new Set());//го добавяме и за стойност му слагаме Сет в който ще държим картите
        }
 
        currentCards.forEach(card => cardsOfPlayers.get(name).add(card)); //добавяме карти в Сета
 
    }
 
    for (let [player, cards] of cardsOfPlayers) {
        let sum = 0;
 
        for (let card of cards) {
            let currentCard = card.slice(0, card.length - 1);
            let powerOfCard = card[card.length - 1];
 
            if (+currentCard >= 2 && +currentCard <= 10) {
                sum += +currentCard * powerMap[powerOfCard]
            } else if (currentCard === "J") {
                sum += 11 * powerMap[powerOfCard]
            } else if (currentCard === "Q") {
                sum += 12 * powerMap[powerOfCard]
            } else if (currentCard === "K") {
                sum += 13 * powerMap[powerOfCard]
            } else if (currentCard === "A") {
                sum += 14 * powerMap[powerOfCard]
            }
        }
 
        cardsOfPlayers.set(player, sum);    //след като сме изчислили сумата сменяме сета на играча със самата сума
    }
 
    for (let [name, value] of cardsOfPlayers) {
        console.log(`${name}: ${value}`)
    }
}
solve(['Peter: 2C, 4H, 9H, AS, QS',
'Tomas: 3H, 10S, JC, KD, 5S, 10S',
'Andrea: QH, QC, QS, QD',
'Tomas: 6H, 7S, KC, KD, 5S, 10C',
'Andrea: QH, QC, JS, JD, JC',
'Peter: JD, JD, JD, JD, JD, JD'])