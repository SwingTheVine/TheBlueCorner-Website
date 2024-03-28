const contentP = document.querySelectorAll('.content-p');
const names = [
  'Scout107',
  'SwingTheVine',
  'Nexiy'
];

names.forEach(name => {
  const name_regex = new RegExp(name, 'g');

  contentP.forEach(container => {
    const nameWithImage = container.innerHTML.replace(name_regex, '<img class="profile-icons" src="./assets/icons/' + name + '_Icon.webp" height="16"> ' + name);
    container.innerHTML = nameWithImage;
  })
})