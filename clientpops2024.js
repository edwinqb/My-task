const openPopupBtnClient = document.getElementById('openPopupBtnClient');
const closePopupBtnClient = document.getElementById('closePopupBtnClient');
const popupClient = document.getElementById('popupClient');

openPopupBtnClient.addEventListener('click', function() {
  popupClient.style.display = 'flex';
});

closePopupBtnClient.addEventListener('click', function() {
  popupClient.style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target === popupClient) {
    popupClient.style.display = 'none';
  }
});