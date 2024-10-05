const h1 = document.getElementById('JuegoJ');

h1.addEventListener('mouseover', function() {
    h1.textContent = "The Legend of Zelda: Majora's Mask";
    
});

h1.addEventListener('mouseout', function() {
    h1.textContent = 'ゼルダの伝説 ムジュラの仮面';
});