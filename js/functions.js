document.addEventListener('DOMContentLoaded', function () {
    var diceElement = document.getElementById('dice');
    var diceImageElement = document.getElementById('diceImage');

    diceElement.addEventListener('click', function () {
        // Arvotaan satunnaisluku välillä 1-6
        var randomNumber = Math.floor(Math.random() * 6) + 1;

        // Päivitetään nopan kuva
        diceImageElement.src = 'img/' + randomNumber + '.png';

        // Päivitetään näytettävä numero
        outputElement.textContent = 'Arvottu numero: ' + randomNumber;
    });
});