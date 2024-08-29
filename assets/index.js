function generateRandomColor(buttonId, displayId, codeId) {
    document.getElementById(buttonId).addEventListener('click', function() {
        
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

      
        document.getElementById(displayId).style.backgroundColor = randomColor;
        document.getElementById(codeId).textContent = `Código da Cor: ${randomColor}`;
    });
}


generateRandomColor('generateBtn', 'colorDisplay', 'colorCode');
  
