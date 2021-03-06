$(function () {
  const cardArray = [
    {
      id: 0,
      name: 'The Fool',
    },
    {
      id: 1,
      name: 'The Magician',
    },
    {
      id: 2,
      name: 'The High Priestess',
    },
    {
      id: 3,
      name: 'The Empress',
    },
    {
      id: 4,
      name: 'The Emperor',
    },
    {
      id: 5,
      name: 'The Hierophant',
    },
    {
      id: 6,
      name: 'The Lovers',
    },
    {
      id: 7,
      name: 'The Chariot',
    },
    {
      id: 8,
      name: 'Strength',
    },
    {
      id: 9,
      name: 'The Hermit',
    },
    {
      id: 10,
      name: 'Wheel Of Fortune',
    },
    {
      id: 11,
      name: 'Justice',
    },
    {
      id: 12,
      name: 'The Hanged Man',
    },
    {
      id: 13,
      name: 'Death',
    },
    {
      id: 14,
      name: 'Temperance',
    },
    {
      id: 15,
      name: 'The Devil',
    },
    {
      id: 16,
      name: 'The Tower',
    },
    {
      id: 17,
      name: 'The Star',
    },
    {
      id: 18,
      name: 'The Moon',
    },
    {
      id: 19,
      name: 'The Sun',
    },
    {
      id: 20,
      name: 'Judgement',
    },
    {
      id: 21,
      name: 'The World',
    },
  ];

  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  $('.tarot-deck').on('click', function () {
    $('.cards-wrapper').empty();

    let usedCard = [];

    for (let i = 0; i < 3; i++) {
      let randomNum = getRandomArbitrary(0, 11);
      console.log(cardArray[randomNum]);

      if (usedCard.includes(randomNum)) {
        //then "redraw" card
      } else {
        const card = $('<div>', {
          class: 'card',
          html: cardArray[randomNum].name,
        });
        $('.cards-wrapper').append(card);
        usedCard.push(randomNum);
      }
    }
  });
});
