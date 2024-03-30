// Creates an array of all content-p bodies of text.
const contentP = document.querySelectorAll('.content-p');

// Creates an array of all of the names to search for.
const names = [
  '9kz7',
  'Bratishkinoff',
  'ChippedJosh',
  'Chuck',
  'Destiny',
  'j75',
  'Nexiy',
  'Scout107',
  'SwingTheVine',
  'Tarik',
  'TheRageBot',
  'TheStruggleIsALie',
  'Tumblurr',
  'Xenoglitch',
  'xQc',
  'Zugu'
];

// For each name...
names.forEach(name => {

  // Create a new RegEx to search for that name. case-INsensitive
  // If the name is inside another container (within <>) it is ignored.
  // For example, <a href="name"> is ignored.
  const name_regex = new RegExp('(?![^<]*>|[^<>]*<\/)(' + name + ')', 'gi');

  // For every body of text...
  contentP.forEach(container => {
    // Replace the name with the pfp + name
    const nameWithImage = container.innerHTML.replace(name_regex, '<img class="profile-icons" src="./assets/icons/pfp/' + name + '_Icon.webp" height="16"> ' + name);
    container.innerHTML = nameWithImage;
  })
})