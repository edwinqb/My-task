const searchInput = document.getElementById('searchInput');
const suggestionsList = document.getElementById('suggestionsList');

const sampleData = [
  'Mingmorsels', 'Challengers', 'Cliveten', 'Pacificsmith'
];

// Filter suggestions based on input
function filterSuggestions(query) {
  if (query.length === 0) {
    suggestionsList.style.display = 'none';
    return;
  }

  const filteredData = sampleData.filter(item => item.toLowerCase().includes(query.toLowerCase()));

  suggestionsList.innerHTML = ''; // Clear current suggestions

  if (filteredData.length > 0) {
    filteredData.forEach(item => {
      const suggestionItem = document.createElement('div');
      suggestionItem.classList.add('suggestion-item');
      suggestionItem.textContent = item;
      suggestionItem.addEventListener('click', () => {
        searchInput.value = item;
        suggestionsList.style.display = 'none'; // Hide suggestions after selection
      });
      suggestionsList.appendChild(suggestionItem);
    });
    suggestionsList.style.display = 'block'; // Show the suggestions
  } else {
    const noSuggestions = document.createElement('div');
    noSuggestions.classList.add('no-suggestions');
    noSuggestions.textContent = 'No suggestions found';
    suggestionsList.appendChild(noSuggestions);
    suggestionsList.style.display = 'block'; // Show the "No suggestions found" message
  }
}

// Event listener for user input
searchInput.addEventListener('input', (e) => {
  filterSuggestions(e.target.value);
});

// Hide the suggestions list when the input loses focus
searchInput.addEventListener('blur', () => {
  setTimeout(() => {
    suggestionsList.style.display = 'none'; // Delay hiding to allow click
  }, 200);
});

// Keep suggestions open if the user clicks inside the input field
searchInput.addEventListener('focus', () => {
  if (searchInput.value.length > 0) {
    suggestionsList.style.display = 'block';
  }
});