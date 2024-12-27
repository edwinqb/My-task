 // Function to display the selected file name
 function displayFileName() {
    // Get the file input element
    const fileInput = document.getElementById('fileInput');
    // Get the name of the selected file
    const fileName = fileInput.files[0] ? fileInput.files[0].name : 'No file selected';
    // Display the file name in the div
    document.getElementById('fileNameDisplay').textContent = '' + fileName;
 }