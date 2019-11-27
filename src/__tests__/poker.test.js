const { 
  formatCards,
  orderCards
} = require('../poker.js');

describe('Poker game', () => {
  test('Format cards', () => {
    const cards = ['As', 'Kc', 'Jd', '6s', '3h'];
    expect(formatCards(cards)).toEqual([
      { face: 14, suite: 's' },
      { face: 13, suite: 'c' },
      { face: 11, suite: 'd' },
      { face: 6, suite: 's' },
      { face: 3, suite: 'h' },
    ]);
  });

  test('order cards', () => {
    const card = [
      { face: 13, suite: 's' },
      { face: 8, suite: 'c' },
      { face: 14, suite: 'd' },
      { face: 9, suite: 's' },
      { face: 3, suite: 'h' },
    ];
    expect(orderCards(cards)).toEqual([
      { face: 14, suite: 'd' },
      { face: 13, suite: 's' },
      { face: 9, suite: 's' },
      { face: 8, suite: 'c' },
      { face: 3, suite: 'h' },
    ])
  })
});