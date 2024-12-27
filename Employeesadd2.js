  // Get references to the popup and buttons
  const openPopupBtnEmployee = document.getElementById('openPopupBtnEmployee');
  const closePopupBtnEmployee = document.getElementById('closePopupBtnEmployee');
  const popupEmployee = document.getElementById('popupEmployee');
 
  // Open the popup when the button is clicked
  openPopupBtnEmployee.addEventListener('click', function() {
    popupEmployee.style.display = 'flex';
  });
 
  // Close the popup when the close button is clicked
  closePopupBtnEmployee.addEventListener('click', function() {
    popupEmployee.style.display = 'none';
  });
 
  // Close the popup if the user clicks outside the popup content
  window.addEventListener('click', function(event) {
    if (event.target === popupEmployee) {
      popupEmployee.style.display = 'none';
    }
  });