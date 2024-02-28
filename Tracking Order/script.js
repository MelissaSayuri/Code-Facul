// Simulando dados de pedidos e chamados
const orders = {
    "123": { status: "Enviado", type: "aberto" },
    "456": { status: "Em Processamento", type: "emAndamento" },
    "789": { status: "Solucionado", type: "fechado" },
    // Adicione mais pedidos conforme necessário
  };
  
  function trackOrder() {
    var orderNumber = document.getElementById('orderNumber').value;
    var order = orders[orderNumber];
  
    if (order) {
      displayOrderStatus(order);
    } else {
      displayOrderStatus({ status: 'Pedido não encontrado'});
    }
  }
  
  function displayOrderStatus(order) {
    var orderStatusDiv = document.getElementById('orderStatus');
    orderStatusDiv.innerHTML = `Status do Pedido: ${order.status}, Tipo: ${order.type}`;
  }
  
  function getAllRequests() {
    var allRequests = filterOrdersByType('todos');
    displayRequestList(allRequests);
  }
  
  function getOpenRequests() {
    var openRequests = filterOrdersByType('aberto');
    displayRequestList(openRequests);
  }
  
  function getInProgressRequests() {
    var inProgressRequests = filterOrdersByType('emAndamento');
    displayRequestList(inProgressRequests);
  }
  
  function getClosedRequests() {
    var closedRequests = filterOrdersByType('fechado');
    displayRequestList(closedRequests);
  }
  
  function filterOrdersByType(type) {
    return Object.values(orders).filter(order => type === 'todos' || order.type === type);
  }
  
  function displayRequestList(requests) {
    var orderStatusDiv = document.getElementById('orderStatus');
    var listHTML = `<h3>Lista de Chamados</h3><ul>`;
    
    requests.forEach(request => {
      listHTML += `<li>${request.status}, Tipo: ${request.type}</li>`;
    });
  
    listHTML += `</ul>`;
    orderStatusDiv.innerHTML = listHTML;
  }
  