
    const h1 = document.getElementById('TituloJ');

h1.addEventListener('mouseover', function() {
    h1.textContent = "The Legend of Zelda: Ocarina of Time";
    
});

h1.addEventListener('mouseout', function() {
    h1.textContent = 'ぜるだ の でんせつ とき の おかりな'; // Regresa al texto original
});
