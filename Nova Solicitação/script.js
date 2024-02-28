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
  
    // Exibindo a mensagem de confirmação
    var confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.textContent = 'Solicitação enviada com sucesso!\nNúmero de Referência: ' + referenceNumber;
  
    // Desabilitando o botão de envio após o envio bem-sucedido
    document.getElementById('submitBtn').disabled = true;
  });
