const { 
  formatCard,
} = require('../poker.js');

describe('Poker game', () => {
  test('Format card', () => {
    const card = ['As', 'Kc', 'Jd', '6s', '3h'];
    expect(formatCard(card)).toEqual([
      { face: 14, suite: 's' },
      { face: 13, suite: 'c' },
      { face: 11, suite: 'd' },
      { face: 6, suite: 's' },
      { face: 3, suite: 'h' },
    ]);
  });
});