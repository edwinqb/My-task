document.getElementById('timeUnique').addEventListener('change', function() {
    let timeInput = this.value;
    let [hours, minutes] = timeInput.split(':');
    let ampmSelect = document.getElementById('ampmUnique');

    if (hours >= 12) {
        ampmSelect.value = 'PM';
        if (hours > 12) hours -= 12;
    } else {
        ampmSelect.value = 'AM';
        if (hours == 0) hours = 12;
    }

    this.value = `${hours.toString().padStart(2, '0')}:${minutes}`;
});