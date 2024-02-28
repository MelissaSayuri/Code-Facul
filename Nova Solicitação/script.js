// Adicionando a geração automática de data e hora
document.getElementById('requestDateTime').value = new Date().toLocaleString();

// Adicionando a lógica de geração de número de referência
document.getElementById('requestForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Simulação: geração automática de número de referência
  var referenceNumber = 'REF' + Math.floor(Math.random() * 1000000);
  
  // Adicionando o número de referência ao formulário
  var referenceField = document.createElement('input');
  referenceField.type = 'hidden';
  referenceField.name = 'referenceNumber';
  referenceField.value = referenceNumber;
  this.appendChild(referenceField);
  
  // Simulação: exibindo um alerta com o número de referência (substitua por lógica real)
  alert('Solicitação enviada com sucesso!\nNúmero de Referência: ' + referenceNumber);
});
