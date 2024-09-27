document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    var numeroA = parseFloat(document.getElementById('numeroA').value);
    var numeroB = parseFloat(document.getElementById('numeroB').value);
    
    
    if (numeroB > numeroA) {
        alert("O número B é maior que o número A! :D ");
      } else {
        alert("O número B deve ser maior que o número A. :(");
      }
    });
  