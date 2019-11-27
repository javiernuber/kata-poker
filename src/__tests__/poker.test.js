const { formatCard } = require('../poker.js');

describe('Poker game', () => {
  test('Format card', () => {
    const card = ['As', 'Kc', 'Qd', 'Js', 'Th'];
    expect(formatCard(card)).toEqual([
      { face: 'A', suite: 's' },
      { face: 'K', suite: 'c' },
      { face: 'Q', suite: 'd' },
      { face: 'J', suite: 's' },
      { face: 'T', suite: 'h' },
    ]);
  });
});