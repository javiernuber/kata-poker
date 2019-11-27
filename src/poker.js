
const getNumberOfCard = (card) => {
    switch (card) {
        case 'A':
            return 14;
            break;
        case 'K':
            return 13;
            break;
        case 'Q':
            return 12;
            break;
        case 'J':
            return 11;
            break;
        case 'T':
            return 10;
            break;
        default:
            return parseInt(card);
        // code block
    }
}

const formatCards = (cards) => {
    return cards.map(card => ({ face: getNumberOfCard(card[0]), suite: card[1] }));
};

const orderCards = (cards) => {
    return cards.sort((a, b) => { return b.face - a.face });
}

module.exports = {
    formatCards,
    orderCards
};