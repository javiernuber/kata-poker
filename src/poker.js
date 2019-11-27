
const formatCard = (cards) => {
    return cards.map(card => ({ face: card[0], suite: card[1] }));
};

export {
    formatCard
}