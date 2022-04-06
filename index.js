// Code your solutions in this file



function writeCards(names, event) {
    const cards = [];

    for (let i = 0; i < names.length; i++) {
        cards[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    }
    return cards;
}


function countDown(int) {
    while (int >= 0) {
        console.log(int);
        int --;
    }
}