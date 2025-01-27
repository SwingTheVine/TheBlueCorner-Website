// Creates an array of all of the names to search for.
const names = [
  '5opka',
  '9kz7',
  'Avtin',
  'Bratishkinoff',
  'CellBit',
  'Cestovina3',
  'Cheeseface',
  'ChippedJosh',
  'Chuck',
  'cooltrain7',
  'd3th',
  'darthsiu',
  'Destiny',
  'Felps',
  'Frog Guy',
  'Hito',
  'hythe666',
  'Iggy S. Aurus',
  'IKOI',
  'j75',
  'Jayleoi',
  'Kapo',
  'Ludwig',
  'Magoulas',
  'Mixi',
  'MixiGaming',
  'Mizkif',
  'Nexiy',
  'Night1172',
  'q77e',
  'Quackity',
  'Queen Fish',
  'Scout107',
  'SkedT',
  'SwingTheVine',
  'Tarik',
  'teejay',
  'TheNewCole',
  'TheRageBot',
  'TheStruggleIsALie',
  'TheTrueCole',
  'Tumblurr',
  'WilburSoot',
  'Xenoglitch',
  'xQc',
  'Zender',
  'Zoe',
  'Zugu'
];

// Creates an array of all elements of text we want to search.
const targetContainers = document.querySelectorAll('p, li, h1, h2, h3, h4, h5, blockquote, small');

// Create a RegEx to search for every name. case-INsensitive
// If the name is inside another container (within <>) it is ignored.
// For example, <p><a href="SwingTheVine"></p> is ignored (will not match).
const name_regex = new RegExp('(?![^<]*>|[^<>]*<\/)(' + names.join('|') + ')', 'gi');

// For every element container...
targetContainers.forEach(container => {
  
  // Replace the name with the pfp + name
  container.innerHTML = container.innerHTML.replace(name_regex, name => {
    return '<span><img class="profile-icon" src="./assets/icons/pfp/' + name + '_Icon.webp" loading="lazy" alt="">' + name + '</span>';
  });
});
