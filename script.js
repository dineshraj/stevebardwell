var quotesArray = [
  'I drive a hard bargain',
  'I know a guy down the market',
  'cinnamon is a spice',
  'I can never find a good caesar salad',
  'pizza is the worst food you can eat',
  'bard bard bard bard bard bard',
  'I am going to shoot some hoops',
  'I am off for a lunchtime walk',
  'I like my coffee strong',
  'I\'ve got nothing left',
  'do you want some better quality tea bags?',
  'I know my films',
  'stop eating my Fruit & Fibre!',
  'stop buying me Fruit and Fibre!'
]
var text = 'I\'m Stephen Bardwell and';

function isBirthday() {
  var bardsBirthday = new Date('1968-01-10');
  var today = new Date();

  return (
    bardsBirthday.getDate() == today.getDate() &&
    bardsBirthday.getMonth() == today.getMonth()
  );
}

var quote = isBirthday() ? 'and it is my birthday!' : quotesArray[Math.floor(Math.random() * quotesArray.length)];

var fullText = text + ' ' + quote;

document.querySelector('.quote').textContent = fullText;
