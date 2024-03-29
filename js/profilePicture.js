const contentP = document.querySelectorAll('.content-p');
const names = [
  '9kz7',
  'Chuck',
  'j75',
  'Nexiy',
  'Scout107',
  'SwingTheVine',
  'TheRageBot',
  'TheStruggleIsALie',
  'Xenoglitch'
];

names.forEach(name => {
  const name_regex = new RegExp(name, 'g');

  contentP.forEach(container => {
    const nameWithImage = container.innerHTML.replace(name_regex, '<img class="profile-icons" src="./assets/icons/pfp/' + name + '_Icon.webp" height="16"> ' + name);
    container.innerHTML = nameWithImage;
  })
})