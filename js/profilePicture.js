// Creates an array of all content-p bodies of text.
const contentP = document.querySelectorAll('.content-p');

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

// Create a new RegEx to search for every name. case-INsensitive
// If the name is inside another container (within <>) it is ignored.
// For example, <a href="SwingTheVine"> is ignored.
const name_regex = new RegExp('(?![^<]*>|[^<>]*<\/)(' + names.join('|') + ')', 'gi');

// For every body of text...
contentP.forEach(container => {
  // Replace the name with the pfp + name
  container.innerHTML = container.innerHTML.replace(name_regex, name => {
    return '<img class="profile-icons" src="./assets/icons/pfp/' + name + '_Icon.webp" height="16" alt=""> ' + name;
  });
});
