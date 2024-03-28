fetch('./html/footer.html')
  .then(response => response.text())
  .then(data => {
      document.getElementById('insert-footer').innerHTML = data;
  })
  .catch(error => {
      console.error('Error:', error);
  });