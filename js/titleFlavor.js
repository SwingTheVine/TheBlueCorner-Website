// Possible flavor texts.
// Quotes should go first
const flavor = [
  '"Cornerness, Blueness, and bottom-rightness are the three uncompromisable positions of the True Corner." &mdash;&nbsp;Scout107',
  '"STAY TRUE, STAY BLUE" &mdash;&nbsp;Nexiy',
  '"We all gaze up into the blue sky" &mdash;&nbsp;Nexiy',
  'Bot-less since 2017!',
  'WCAG A compliant!',
  'WCAG AA compliant!',
  'Approximately 1,724,450 pixels placed!',
  'Da ba dee da ba di!',
  'Blue are the people here',
  'We shall meet again!',
  'If we were red, we would die!',
  'Fastest website in the West!'
];

const numberOfQuotes = 3;

// The flavor text element
const element = document.getElementById('title-flavor');

// Randomize the title flavor text
flavorIndex = getRandomIntInclusive(0, flavor.length - 1);

// Creates the new title flavor text (blockquote if a quote)
const newElement = document.createElement(flavorIndex <= (numberOfQuotes - 1) ? 'blockquote' : 'small');

// Copy all attributes from the original element to the new element
for (let attr of element.attributes) {
  newElement.setAttribute(attr.name, attr.value);
}

newElement.innerHTML = flavor[flavorIndex];

element.replaceWith(newElement);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive
function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}