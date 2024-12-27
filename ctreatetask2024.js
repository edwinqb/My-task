const openPopupBtnUnique = document.getElementById('openPopupBtnUnique');
const closePopupBtnUnique = document.getElementById('closePopupBtnUnique');
const popupUnique = document.getElementById('popupUnique');

openPopupBtnUnique.addEventListener('click', function() {
  popupUnique.style.display = 'flex';
});

closePopupBtnUnique.addEventListener('click', function() {
  popupUnique.style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target === popupUnique) {
    popupUnique.style.display = 'none';
  }
});